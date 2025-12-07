'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import SceneMetadata from '@/components/SceneMetadata';
import ScriptNavigation from '@/components/ScriptNavigation';

const tocItems = [
  { id: 'overview', title: 'Scene Overview', level: 1 },
  { id: 'transition', title: 'Transition From Scene 2', level: 1 },
  { id: 'mc-enters', title: 'MC Enters Home', level: 1 },
  { id: 'mom-confrontation', title: 'Mom Confrontation', level: 1 },
  { id: 'suitcase-examination', title: 'Examining the Suitcase', level: 1 },
  { id: 'awakening', title: 'The Awakening', level: 1 },
  { id: 'transformation', title: 'Transformation Sequence', level: 1 },
  { id: 'robot-malfunction', title: 'Robot Malfunction', level: 1 },
  { id: 'dead-end', title: 'Dead End & The News', level: 1 },
  { id: 'news-broadcast', title: 'News Broadcast', level: 1 },
  { id: 'summons', title: 'The Summons', level: 1 },
  { id: 'father-departure', title: "Father's Departure", level: 1 },
  { id: 'closing', title: 'Closing', level: 1 },
];

export default function Scene3() {
  return (
    <div className="min-h-screen">
      <TableOfContents items={tocItems} />

      <div className="max-w-7xl mx-auto lg:ml-72">
        <div className="py-20 px-4">
          <main>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link href="/scripts">
                <motion.button
                  whileHover={{ x: -5 }}
                  className="flex items-center text-ice-400 hover:text-ice-200 mb-8 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Story Scripts
                </motion.button>
              </Link>

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-7xl font-bold mb-4 gradient-text text-center cyber-text"
              >
                ASEP
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center mb-3"
              >
                <span className="text-sm text-ice-400 tracking-widest uppercase">Game Story Script</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold mb-8 text-ice-100 text-center"
              >
                Scene 3: Home — The White Suitcase
              </motion.h2>

              <div className="flex flex-col items-center gap-4 mb-8">
                <div className="text-ice-400 text-sm">
                  <span>Author: MANOJ TIWARI RAMCHANDRA</span>
                </div>
                <ShareButtons
                  title="Scene 3: Home — The White Suitcase"
                  url="/scripts/scene-3-home-the-white-suitcase"
                />
              </div>

              <SceneMetadata
                wordCount={3800}
                readTime={16}
                lastUpdated="2025-12-07"
                version="1.0"
              />

              {/* Scene Overview */}
              <Section id="overview" title="Scene Overview">
                <InfoBox>
                  <InfoRow label="Location" value="MC's Home — Interior" />
                  <InfoRow label="Time" value="Evening (After curfew ends)" />
                  <InfoRow label="Weather" value="Dim evening light through half-closed blinds" />
                  <InfoRow label="Mood" value="Mystery → Curiosity → Shock → Confusion → Tension" />
                </InfoBox>
              </Section>

              {/* Transition */}
              <Section id="transition" title="Transition From Scene 2">
                <ScreenEffect>[FADE IN FROM BLACK]</ScreenEffect>

                <Paragraph>
                  Screen fades to black. The distant echo of city sounds — sirens, muffled announcements — slowly fades into silence.
                </Paragraph>

                <Paragraph>
                  Fade in: Interior. MC&apos;s home. Evening light filters through half-closed blinds.
                </Paragraph>
              </Section>

              {/* MC Enters */}
              <Section id="mc-enters" title="Cinematic — MC Enters">
                <ScreenEffect>[CINEMATIC — MC ENTERS]</ScreenEffect>

                <Paragraph>
                  The front door opens. MC steps inside, carrying a WHITE SUITCASE — pristine, almost unnaturally clean against the muted tones of the room. MC sets it down carefully near the bed, eyes lingering on it with curiosity.
                </Paragraph>

                <Paragraph>
                  FOOTSTEPS approach from behind.
                </Paragraph>
              </Section>

              {/* Mom Confrontation */}
              <Section id="mom-confrontation" title="Mom Appears at Doorway">
                <Paragraph>
                  Camera shifts. MOM stands at the door frame, arms crossed. Her expression is firm but carries an undertone of concern.
                </Paragraph>

                <DialogueBox speaker="Mom">
                  The curfew may have ended... but YOU are not allowed to leave this house.
                </DialogueBox>

                <Paragraph italic>
                  Beat. Silence hangs in the air.
                </Paragraph>

                <SubSection title="Dialogue Choice — Optional">
                  <ChoiceBox choices={[
                    { label: 'A', text: '"Yeah... I got it." (Calm, accepting)' },
                    { label: 'B', text: '"Why? What\'s going on?" (Curious)' },
                    { label: 'C', text: 'Stay silent (Nod slowly)' },
                  ]} defaultChoice="A" />
                </SubSection>

                <DialogueBox speaker="MC">
                  Yeah... I got it.
                </DialogueBox>

                <Paragraph>
                  Mom holds her gaze for a moment longer, as if searching for something in MC&apos;s expression. Then, without another word, she turns and walks away.
                </Paragraph>

                <Paragraph>
                  Her footsteps fade down the hallway.
                </Paragraph>

                <InteractivePrompt>
                  [Press E / X to close the door]
                </InteractivePrompt>

                <Paragraph>
                  MC reaches for the door handle. The door clicks shut. The room falls into quiet stillness.
                </Paragraph>
              </Section>

              {/* Suitcase Examination */}
              <Section id="suitcase-examination" title="MC Alone — The Suitcase">
                <Paragraph>
                  MC turns. The WHITE SUITCASE sits on the floor, almost glowing under the dim light.
                </Paragraph>

                <Paragraph>
                  Camera slowly zooms in on MC&apos;s face — confusion, curiosity, hesitation.
                </Paragraph>

                <DialogueBox speaker="MC" internal>
                  What the hell is this thing...?
                </DialogueBox>

                <InteractivePrompt>
                  [Hold R / RT to approach the suitcase]
                </InteractivePrompt>

                <Paragraph>
                  MC kneels down. Fingers trace the smooth surface. No brand. No tags. No markings.
                </Paragraph>

                <Paragraph>
                  The latches are cold to the touch.
                </Paragraph>
              </Section>

              {/* The Awakening */}
              <Section id="awakening" title="The Awakening">
                <Paragraph>
                  MC kneels down slowly. The white surface is seamless — almost alien. Then MC notices it: a faint outline near the handle. A FINGERPRINT SENSOR, barely visible.
                </Paragraph>

                <DialogueBox speaker="MC" internal>
                  Is that... a scanner?
                </DialogueBox>

                <InteractivePrompt>
                  [Hold F / Y to place finger on sensor]
                </InteractivePrompt>

                <Paragraph>
                  MC hesitates, then presses a finger against the cold surface.
                </Paragraph>

                <ScreenEffect>BEEP.</ScreenEffect>

                <Paragraph>
                  A thin blue line scans across the sensor.
                </Paragraph>
              </Section>

              {/* Transformation Sequence */}
              <Section id="transformation" title="Cinematic — Transformation Sequence">
                <ScreenEffect>[CINEMATIC — TRANSFORMATION SEQUENCE]</ScreenEffect>

                <Paragraph>
                  The suitcase VIBRATES. MC stumbles backward.
                </Paragraph>

                <CodeDisplay>
                  WHIRRRR — CLICK — CLACK
                </CodeDisplay>

                <Paragraph>
                  The white panels begin to SHIFT. Edges fold inward. Corners rotate. Pieces slide and lock into place with mechanical precision.
                </Paragraph>

                <Paragraph>
                  In seconds, the suitcase is gone.
                </Paragraph>

                <Paragraph>
                  In its place: a small, CUTE ROBOT — compact, rounded edges, about the size of a large cat. It has stubby limbs, a smooth white shell, and a RECTANGULAR SCREEN where its face should be.
                </Paragraph>

                <SubSection title="The Loading Screen">
                  <Paragraph>
                    The screen FLICKERS to life. A SKELETON LOADING ANIMATION appears — but not ordinary. It PULSES and FLASHES in rhythmic bursts, cycling through soft blues and whites. Almost hypnotic.
                  </Paragraph>

                  <CodeDisplay>
                    {`▓░▓░▓░▓░▓░▓░▓░▓░
◈ INITIALIZING ◈
░▓░▓░▓░▓░▓░▓░▓░▓`}
                  </CodeDisplay>

                  <Paragraph>
                    The robot remains still. Only the screen blinks.
                  </Paragraph>
                </SubSection>

                <SubSection title="MC's Reaction">
                  <Paragraph>
                    MC&apos;s eyes go wide. He takes a step back, nearly tripping.
                  </Paragraph>

                  <DialogueBox speaker="MC">
                    What the—?!
                  </DialogueBox>

                  <Paragraph>
                    Heart pounding. Breathing quick. MC stares at the little robot, frozen in disbelief.
                  </Paragraph>

                  <Paragraph>
                    Seconds pass. The loading screen keeps blinking. No progress. No change.
                  </Paragraph>

                  <Paragraph>
                    The room is silent except for a faint electronic HUM from the robot.
                  </Paragraph>
                </SubSection>

                <SubSection title="Interactive — Curiosity">
                  <Paragraph>
                    After a moment, MC&apos;s fear shifts to curiosity. He leans in slowly.
                  </Paragraph>

                  <DialogueBox speaker="MC" internal>
                    It&apos;s... just loading? What is this thing?
                  </DialogueBox>

                  <InteractivePrompt>
                    [Press E / X to touch the robot]
                  </InteractivePrompt>
                </SubSection>
              </Section>

              {/* Robot Malfunction */}
              <Section id="robot-malfunction" title="MC Touches the Robot">
                <Paragraph>
                  MC reaches out — fingers brushing against the robot&apos;s smooth shell.
                </Paragraph>

                <ScreenEffect>INSTANTLY—</ScreenEffect>

                <CodeDisplay>BZZZT.</CodeDisplay>

                <Paragraph>
                  The screen FLICKERS violently — distorts — then goes BLACK.
                </Paragraph>

                <Paragraph>
                  The hum dies. The soft glow fades.
                </Paragraph>

                <Paragraph>
                  Complete silence.
                </Paragraph>

                <Paragraph>
                  The robot is OFF. Motionless. Dead.
                </Paragraph>

                <SubSection title="MC Panics">
                  <Paragraph>
                    MC yanks his hand back as if burned.
                  </Paragraph>

                  <DialogueBox speaker="MC">
                    No no no no—!
                  </DialogueBox>

                  <Paragraph>
                    He drops to his knees, hands hovering over the robot, afraid to touch it again.
                  </Paragraph>

                  <DialogueBox speaker="MC">
                    Did I break it?! What did I do?!
                  </DialogueBox>

                  <Paragraph>
                    He looks around frantically — as if someone might have answers. But he&apos;s alone.
                  </Paragraph>

                  <Paragraph>
                    MC stares at the lifeless robot. His reflection warps slightly in the dark screen.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Dead End */}
              <Section id="dead-end" title="Dead End & The News">
                <SubSection title="MC Examines the Robot">
                  <Paragraph>
                    MC carefully picks up the lifeless robot. It&apos;s lighter than expected — cool to the touch, eerily smooth.
                  </Paragraph>

                  <Paragraph>
                    He turns it over. Looks underneath. Runs his fingers along every edge.
                  </Paragraph>

                  <Paragraph>
                    Nothing.
                  </Paragraph>

                  <Paragraph>
                    No seams. No screws. No panels. No ports. No buttons.
                  </Paragraph>

                  <Paragraph>
                    Just a seamless white metallic shell — as if it was grown, not built.
                  </Paragraph>

                  <DialogueBox speaker="MC">
                    Come on... there has to be something...
                  </DialogueBox>

                  <Paragraph>
                    He taps the dark screen. Nothing. He shakes it gently. Nothing.
                  </Paragraph>

                  <Paragraph>
                    He presses where the fingerprint sensor was — now vanished, merged into the robot&apos;s body.
                  </Paragraph>

                  <Paragraph>
                    Still nothing.
                  </Paragraph>
                </SubSection>

                <SubSection title="MC Gives Up — For Now">
                  <Paragraph>
                    Frustrated, MC sets the robot down on his desk. He stares at it for a long moment.
                  </Paragraph>

                  <DialogueBox speaker="MC">
                    ...Useless.
                  </DialogueBox>

                  <Paragraph>
                    He slumps onto his bed, exhausted. Eyes drift to the ceiling. The weight of the day — the chaos, the curfew, this impossible machine — presses down on him.
                  </Paragraph>

                  <Paragraph>
                    After a moment, he reaches for the remote.
                  </Paragraph>

                  <ScreenEffect>CLICK.</ScreenEffect>
                </SubSection>
              </Section>

              {/* News Broadcast */}
              <Section id="news-broadcast" title="TV Turns On — News Broadcast">
                <Paragraph>
                  The screen flickers to life. A NEWS CHANNEL. The studio is sleek, sterile — holographic graphics float beside the anchor.
                </Paragraph>

                <Paragraph>
                  The ANCHOR — a composed woman in formal attire — speaks with measured urgency.
                </Paragraph>

                <SubSection title="News Report 1">
                  <DialogueBox speaker="Anchor">
                    Good evening. This is AEN — ASEP Emergency Network.
                  </DialogueBox>

                  <Paragraph>
                    Behind her, footage plays: damaged buildings, emergency crews, drones scanning streets.
                  </Paragraph>

                  <DialogueBox speaker="Anchor">
                    City-1 is currently under CRITICAL ASSESSMENT PROTOCOL. All sectors are being scanned for structural damage, radiation levels, and potential secondary threats.
                  </DialogueBox>

                  <Paragraph>
                    Graphics appear: Maps of City-1 with color-coded zones — red, orange, yellow.
                  </Paragraph>

                  <DialogueBox speaker="Anchor">
                    Authorities urge all citizens to remain calm and STAY INDOORS until further notice. Essential services are operational, but non-emergency movement is strictly prohibited.
                  </DialogueBox>

                  <Paragraph italic>Beat.</Paragraph>

                  <DialogueBox speaker="Anchor">
                    We repeat: Do NOT attempt to leave your designated residential zones.
                  </DialogueBox>
                </SubSection>

                <SubSection title="News Report 2">
                  <Paragraph>
                    The anchor&apos;s expression shifts — slightly more tense.
                  </Paragraph>

                  <DialogueBox speaker="Anchor">
                    In related developments... there has been NO official statement from the President&apos;s Office regarding yesterday&apos;s incident.
                  </DialogueBox>

                  <Paragraph>
                    The screen shows a still image of the PRESIDENT — a stern, distant figure.
                  </Paragraph>

                  <DialogueBox speaker="Anchor">
                    Despite growing public concern, the administration has remained silent on the nature of the attack and the government&apos;s response.
                  </DialogueBox>

                  <Paragraph italic>Beat.</Paragraph>

                  <DialogueBox speaker="Anchor">
                    The ONLY confirmed update: The President is scheduled to address the nation in a public speech at THE FARMLAND... two days from now.
                  </DialogueBox>

                  <Paragraph>
                    Footage shifts: A wide, open landscape — THE FARMLAND — a massive agricultural zone outside the city. Flags. Podiums being constructed.
                  </Paragraph>

                  <DialogueBox speaker="Anchor">
                    Until then, citizens are advised to rely on official channels for information and avoid spreading unverified reports.
                  </DialogueBox>
                </SubSection>

                <SubSection title="MC's Reaction">
                  <Paragraph>
                    MC watches in silence. His jaw tightens.
                  </Paragraph>

                  <DialogueBox speaker="MC" internal>
                    Two days? That&apos;s it? People are scared, the city&apos;s half-wrecked... and he&apos;s just gonna wait?
                  </DialogueBox>

                  <Paragraph>
                    His eyes drift back to the robot on the desk. Dark. Silent. Dead.
                  </Paragraph>

                  <DialogueBox speaker="MC" internal>
                    ...What the hell is going on?
                  </DialogueBox>
                </SubSection>

                <SubSection title="Subtle Detail">
                  <Paragraph>
                    As MC looks away from the TV, the camera lingers on the robot for a moment.
                  </Paragraph>

                  <Paragraph italic>
                    For just a SPLIT SECOND — barely noticeable — the screen on the robot FLICKERS. A single pixel of light. Then gone.
                  </Paragraph>

                  <Paragraph>
                    MC doesn&apos;t notice.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* The Summons */}
              <Section id="summons" title="The Summons">
                <SubSection title="MC on the Bed">
                  <Paragraph>
                    The news report ends. The anchor&apos;s voice fades into background noise — weather updates, emergency hotlines, government jingles.
                  </Paragraph>

                  <Paragraph>
                    MC doesn&apos;t react. He just lies there, staring at the ceiling. Empty. Drained.
                  </Paragraph>

                  <Paragraph>
                    The TV drones on. The robot sits lifeless on the desk. The room feels heavy with silence.
                  </Paragraph>
                </SubSection>

                <SubSection title="Father's Voice — From the Hall">
                  <Paragraph>
                    Suddenly—
                  </Paragraph>

                  <DialogueBox speaker="Father (O.S.)">
                    [MC&apos;s name]! Come here. Now.
                  </DialogueBox>

                  <Paragraph>
                    The voice is firm. Urgent. No room for delay.
                  </Paragraph>

                  <Paragraph>
                    MC blinks. Sits up slowly.
                  </Paragraph>

                  <DialogueBox speaker="MC">
                    ...Dad?
                  </DialogueBox>
                </SubSection>

                <SubSection title="MC Walks to the Hall">
                  <Paragraph>
                    MC gets up and makes his way to the hall. The corridor is dim — only a single light flickers overhead.
                  </Paragraph>

                  <Paragraph>
                    He steps into the main hall and stops.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Father Departure */}
              <Section id="father-departure" title="Father — Ready to Leave">
                <Paragraph>
                  FATHER stands near the front door. He&apos;s dressed sharply — travel coat, boots, a small bag slung over his shoulder. His expression is tense, focused. He&apos;s checking something on a small device in his hand.
                </Paragraph>

                <Paragraph>
                  He looks like a man about to walk into something serious.
                </Paragraph>

                <Paragraph>
                  MOM stands nearby, arms crossed, watching in silence. Her face is unreadable.
                </Paragraph>

                <SubSection title="Dialogue">
                  <Paragraph>
                    MC approaches cautiously.
                  </Paragraph>

                  <DialogueBox speaker="MC">
                    Dad? What&apos;s going on? Where are you—
                  </DialogueBox>

                  <DialogueBox speaker="Father">
                    I&apos;m leaving for the Farmland. Tonight.
                  </DialogueBox>

                  <Paragraph italic>Beat. MC frowns.</Paragraph>

                  <DialogueBox speaker="MC">
                    The Farmland? But... the President&apos;s speech isn&apos;t for two days—
                  </DialogueBox>

                  <DialogueBox speaker="Father">
                    I know.
                  </DialogueBox>

                  <Paragraph>
                    He steps closer. Places a firm hand on MC&apos;s shoulder.
                  </Paragraph>

                  <DialogueBox speaker="Father">
                    Listen to me carefully. Tomorrow — you and your mother will come to the Farmland. No delays. No excuses.
                  </DialogueBox>

                  <Paragraph>
                    MC stares at him, confused.
                  </Paragraph>

                  <DialogueBox speaker="MC">
                    But why? What&apos;s happening? Is this about the attack? The curfew?
                  </DialogueBox>

                  <Paragraph>
                    Father doesn&apos;t answer. He glances at Mom — a quick, loaded look. She looks away.
                  </Paragraph>

                  <DialogueBox speaker="Father">
                    Just be there. Both of you.
                  </DialogueBox>

                  <Paragraph>
                    He releases MC&apos;s shoulder and turns toward the door.
                  </Paragraph>
                </SubSection>

                <SubSection title="MC's Reaction — Choice Moment">
                  <Paragraph>
                    MC watches his father reach for the door handle. Questions swirl in his mind.
                  </Paragraph>

                  <ChoiceBox choices={[
                    { label: 'A', text: '"Dad, wait — what aren\'t you telling me?" (Confront him)' },
                    { label: 'B', text: '"...Alright. We\'ll be there." (Accept quietly)' },
                    { label: 'C', text: 'Stay silent (Let him leave)' },
                  ]} defaultChoice="C" />
                </SubSection>

                <SubSection title="Default / Canon — Option C: Stay Silent">
                  <Paragraph>
                    MC says nothing. He just watches.
                  </Paragraph>

                  <Paragraph>
                    Father pauses at the door. Without turning around:
                  </Paragraph>

                  <DialogueBox speaker="Father">
                    Take care of your mother.
                  </DialogueBox>

                  <Paragraph>
                    The door opens. A gust of cold air rushes in. And then — he&apos;s gone.
                  </Paragraph>

                  <ScreenEffect>CLICK. The door shuts.</ScreenEffect>

                  <Paragraph>
                    Silence.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Closing */}
              <Section id="closing" title="Aftermath">
                <Paragraph>
                  MC stands frozen. Mom walks past him without a word, disappearing into the kitchen.
                </Paragraph>

                <Paragraph>
                  He&apos;s alone in the hall now. The flickering light buzzes overhead.
                </Paragraph>

                <DialogueBox speaker="MC" internal>
                  The Farmland... the President... Dad leaving in the middle of the night...
                </DialogueBox>

                <Paragraph>
                  His fists clench.
                </Paragraph>

                <DialogueBox speaker="MC" internal>
                  What the hell is going on in this city?
                </DialogueBox>

                <SubSection title="Transition — Back to MC's Room">
                  <Paragraph>
                    MC returns to his room. The robot is still there. Still dark. Still dead.
                  </Paragraph>

                  <Paragraph>
                    He sits on the edge of his bed, head in his hands.
                  </Paragraph>

                  <Paragraph>
                    The TV murmurs in the background. Outside, distant sirens wail.
                  </Paragraph>
                </SubSection>

                <ScreenEffect>[END OF SCENE 3]</ScreenEffect>

                <ScreenEffect>[SCENE 3 — FADE TO BLACK]</ScreenEffect>

                <div className="text-center text-3xl font-bold text-ice-100 my-12 tracking-widest">
                  TOMORROW.
                </div>

                <div className="text-center text-2xl font-bold text-ice-100 my-12">
                  SCENE 3: COMPLETE
                </div>
              </Section>

              {/* Script Navigation */}
              <ScriptNavigation currentSlug="scene-3-home-the-white-suitcase" />

              {/* Footer */}
              <div className="glass rounded-xl p-6 mt-12 text-center text-ice-400 text-sm max-w-4xl mx-auto">
                <p>Document Version: 1.0 • Game: ASEP</p>
                <p>Author: MANOJ TIWARI RAMCHANDRA</p>
                <p>Last Updated: 07/12/2025</p>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

// Component Helpers
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="glass rounded-xl p-8 mb-8 scroll-mt-24 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-ice-100 border-b border-ice-700 pb-3">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 pl-6 border-l-4 border-ice-600">
      <h4 className="text-xl font-semibold mb-4 text-ice-200">{title}</h4>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

function Paragraph({ children, italic = false, className = '' }: { children: React.ReactNode; italic?: boolean; className?: string }) {
  return (
    <p className={`text-ice-300 max-w-prose text-lg mb-5 story-paragraph ${italic ? 'italic text-ice-400' : ''} ${className}`}>
      {children}
    </p>
  );
}

function DialogueBox({ speaker, children, internal = false }: { speaker: string; children: React.ReactNode; internal?: boolean }) {
  return (
    <div className={`bg-ice-900/40 border-l-4 ${internal ? 'border-ice-600' : 'border-ice-400'} p-5 rounded my-6 max-w-prose`}>
      <div className="text-ice-200 font-semibold mb-3 text-base">{speaker}{internal ? ' (Internal)' : ''}:</div>
      <div className="text-ice-300 italic text-lg story-paragraph">&quot;{children}&quot;</div>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-ice-900/40 rounded-lg p-6 space-y-3">
      {children}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex">
      <span className="text-ice-400 font-semibold w-32 flex-shrink-0">{label}:</span>
      <span className="text-ice-300 flex-1">{value}</span>
    </div>
  );
}

function CodeDisplay({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black/40 rounded p-3 font-mono text-ice-300 text-sm my-3 whitespace-pre-wrap">
      {children}
    </div>
  );
}

function ScreenEffect({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center text-xl font-bold text-ice-100 bg-gradient-to-r from-ice-500/20 to-ice-700/20 py-3 rounded my-4">
      {children}
    </div>
  );
}

function InteractivePrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center py-6 border-2 border-dashed border-ice-500/50 rounded-xl bg-ice-900/20 my-6">
      <div className="text-lg text-ice-300 font-medium">{children}</div>
    </div>
  );
}

function ChoiceBox({ choices, defaultChoice }: { choices: { label: string; text: string }[]; defaultChoice: string }) {
  return (
    <div className="bg-ice-900/30 rounded-lg p-6 my-6 border border-ice-600/50">
      <div className="text-ice-200 font-semibold mb-4">Player Choice:</div>
      <div className="space-y-3">
        {choices.map((choice) => (
          <div
            key={choice.label}
            className={`p-3 rounded ${choice.label === defaultChoice ? 'bg-ice-600/30 border border-ice-400' : 'bg-ice-800/30'}`}
          >
            <span className="text-ice-400 font-bold mr-2">[{choice.label}]</span>
            <span className="text-ice-300">{choice.text}</span>
            {choice.label === defaultChoice && (
              <span className="ml-2 text-xs text-ice-400 uppercase tracking-wider">(Default/Canon)</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
