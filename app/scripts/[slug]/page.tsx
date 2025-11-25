'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

// Sample script data - in production, fetch from database or markdown files
const scriptsData: Record<string, any> = {
  'auto-farm-script': {
    title: 'Auto Farm Script',
    description: 'Automated farming system with customizable settings and anti-detection features.',
    date: '2024-11-20',
    tags: ['Automation', 'Farming', 'Lua'],
    content: `
## Overview

This auto farm script provides a reliable and customizable automated farming solution. It includes anti-detection features and can be configured to suit your specific needs.

## Features

- ✓ Customizable farm routes
- ✓ Anti-detection measures
- ✓ Auto-collect items
- ✓ Configurable delays
- ✓ Safe mode for low detection risk

## Installation

1. Copy the script below
2. Paste into your executor
3. Configure the settings
4. Execute and enjoy!

## Configuration

Before running, adjust these settings:
    `,
    code: `-- Auto Farm Script
-- Configure these settings
local Settings = {
    FarmSpeed = 50,
    AutoCollect = true,
    SafeMode = true,
    FarmDistance = 100
}

-- Main farm loop
local function startFarm()
    while Settings.AutoCollect do
        -- Find nearest farm target
        local target = findNearestTarget()

        if target and target.Distance <= Settings.FarmDistance then
            -- Move to target
            moveTo(target.Position)
            wait(0.5)

            -- Collect item
            collect(target)

            if Settings.SafeMode then
                wait(math.random(1, 3))
            end
        end

        wait(0.1)
    end
end

-- Initialize
print("Auto Farm Script loaded!")
print("Press F to start farming")

game:GetService("UserInputService").InputBegan:Connect(function(input)
    if input.KeyCode == Enum.KeyCode.F then
        startFarm()
    end
end)`,
  },
  'esp-wallhack': {
    title: 'ESP Wallhack',
    description: 'Enhanced player visibility script with customizable colors and distance settings.',
    date: '2024-11-18',
    tags: ['Visual', 'ESP', 'Advanced'],
    content: `
## Overview

This ESP (Extra Sensory Perception) script adds visual indicators to see players through walls with customizable colors and settings.

## Features

- ✓ See players through walls
- ✓ Customizable colors
- ✓ Distance indicators
- ✓ Health bars
- ✓ Name tags
- ✓ Toggle on/off

## Controls

- **F1** - Toggle ESP
- **F2** - Change color scheme
    `,
    code: `-- ESP Wallhack Script
local Players = game:GetService("Players")
local RunService = game:GetService("RunService")
local LocalPlayer = Players.LocalPlayer

local Settings = {
    Enabled = true,
    ShowDistance = true,
    ShowHealth = true,
    Color = Color3.fromRGB(0, 255, 255),
    MaxDistance = 500
}

local ESPObjects = {}

local function createESP(player)
    local highlight = Instance.new("Highlight")
    highlight.Adornee = player.Character
    highlight.FillColor = Settings.Color
    highlight.OutlineColor = Color3.new(1, 1, 1)
    highlight.FillTransparency = 0.5
    highlight.OutlineTransparency = 0
    highlight.Parent = player.Character

    return highlight
end

local function updateESP()
    for _, player in pairs(Players:GetPlayers()) do
        if player ~= LocalPlayer and player.Character then
            if not ESPObjects[player] then
                ESPObjects[player] = createESP(player)
            end

            local distance = (LocalPlayer.Character.HumanoidRootPart.Position -
                            player.Character.HumanoidRootPart.Position).Magnitude

            if distance > Settings.MaxDistance then
                ESPObjects[player].Enabled = false
            else
                ESPObjects[player].Enabled = Settings.Enabled
            end
        end
    end
end

RunService.RenderStepped:Connect(updateESP)

print("ESP loaded! Press F1 to toggle")`,
  },
  'speed-hack': {
    title: 'Speed Hack',
    description: 'Movement speed modifier with smooth acceleration and safe speed limits.',
    date: '2024-11-15',
    tags: ['Movement', 'Speed', 'Simple'],
    content: `
## Overview

Simple and effective speed modification script with smooth acceleration and customizable speed settings.

## Features

- ✓ Adjustable speed multiplier
- ✓ Smooth acceleration
- ✓ Safe speed limits
- ✓ Toggle on/off
- ✓ Keybind customization

## Controls

- **Shift** - Speed boost while held
- **Ctrl+Up** - Increase speed
- **Ctrl+Down** - Decrease speed
    `,
    code: `-- Speed Hack Script
local Players = game:GetService("Players")
local UserInputService = game:GetService("UserInputService")
local LocalPlayer = Players.LocalPlayer

local Settings = {
    DefaultSpeed = 16,
    SpeedMultiplier = 2,
    MaxSpeed = 100,
    Enabled = false
}

local function setSpeed(speed)
    if LocalPlayer.Character and LocalPlayer.Character:FindFirstChild("Humanoid") then
        LocalPlayer.Character.Humanoid.WalkSpeed = speed
    end
end

UserInputService.InputBegan:Connect(function(input, gameProcessed)
    if gameProcessed then return end

    if input.KeyCode == Enum.KeyCode.LeftShift then
        Settings.Enabled = true
        local newSpeed = math.min(
            Settings.DefaultSpeed * Settings.SpeedMultiplier,
            Settings.MaxSpeed
        )
        setSpeed(newSpeed)
    end
end)

UserInputService.InputEnded:Connect(function(input)
    if input.KeyCode == Enum.KeyCode.LeftShift then
        Settings.Enabled = false
        setSpeed(Settings.DefaultSpeed)
    end
end)

-- Speed adjustment
UserInputService.InputBegan:Connect(function(input)
    if UserInputService:IsKeyDown(Enum.KeyCode.LeftControl) then
        if input.KeyCode == Enum.KeyCode.Up then
            Settings.SpeedMultiplier = math.min(Settings.SpeedMultiplier + 0.5, 10)
            print("Speed multiplier:", Settings.SpeedMultiplier)
        elseif input.KeyCode == Enum.KeyCode.Down then
            Settings.SpeedMultiplier = math.max(Settings.SpeedMultiplier - 0.5, 1)
            print("Speed multiplier:", Settings.SpeedMultiplier)
        end
    end
end)

print("Speed Hack loaded!")
print("Hold Shift for speed boost")`,
  },
};

export default function ScriptPage() {
  const params = useParams();
  const slug = params.slug as string;
  const script = scriptsData[slug];

  if (!script) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-ice-100 mb-4">Script Not Found</h1>
          <Link href="/scripts">
            <button className="px-6 py-3 glass rounded-lg text-ice-300 hover:text-ice-100">
              Back to Scripts
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <article className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/scripts">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center text-ice-400 hover:text-ice-200 mb-8 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Scripts
            </motion.button>
          </Link>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4 gradient-text"
          >
            {script.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 mb-8 text-ice-400"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {script.date}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {script.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-medium rounded-full glass text-ice-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="glass rounded-xl p-8 mb-8"
          >
            <div className="prose prose-invert max-w-none">
              <div className="text-ice-300 whitespace-pre-line leading-relaxed">
                {script.content}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-ice-100">Script Code</h2>
            <CodeBlock code={script.code} language="lua" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 glass rounded-xl p-6"
          >
            <h3 className="text-xl font-bold mb-3 text-ice-100">⚠️ Disclaimer</h3>
            <p className="text-ice-400 text-sm">
              Use this script at your own risk. Game modifications may violate terms of service
              and result in bans. This is for educational purposes only.
            </p>
          </motion.div>
        </motion.div>
      </article>
    </div>
  );
}
