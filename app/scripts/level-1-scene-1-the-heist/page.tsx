'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import SceneMetadata from '@/components/SceneMetadata';

const tocItems = [
  { id: 'setting', title: 'Setting', level: 1 },
  { id: 'opening-cinematic', title: 'Opening Cinematic', level: 1 },
  { id: 'interior', title: 'Interior – Server Room', level: 1 },
  { id: 'chase-begins', title: 'The Chase Begins', level: 1 },
  { id: 'qte-1', title: 'Quick Time Event #1', level: 1 },
  { id: 'rooftop-chase', title: 'Rooftop Chase', level: 1 },
  { id: 'missile-strike', title: 'The Missile Strike', level: 1 },
  { id: 'survival', title: 'Survival Sequence', level: 1 },
  { id: 'stage-1', title: 'Stage 1: Hold On', level: 2 },
  { id: 'stage-2', title: 'Stage 2: Dodge Debris', level: 2 },
  { id: 'stage-3', title: 'Stage 3: Collapsing Stairwell', level: 2 },
  { id: 'stage-4', title: 'Stage 4: Final Drop', level: 2 },
  { id: 'aftermath', title: 'Ground Level – Aftermath', level: 1 },
  { id: 'junkyard', title: 'The Junkyard', level: 1 },
  { id: 'arrival', title: 'The Arrival', level: 1 },
  { id: 'summary', title: 'Player Interactions Summary', level: 1 },
];

export default function Level1Scene1() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
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

              {/* Title */}
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
                Level 1 – Scene 1: The Heist
              </motion.h2>

              <div className="flex flex-col items-center gap-4 mb-8">
                <div className="text-ice-400 text-sm">
                  <span>Author: MANOJ TIWARI RAMCHANDRA</span>
                </div>
                <ShareButtons
                  title="Level 1 - Scene 1: The Heist"
                  url="/scripts/level-1-scene-1-the-heist"
                />
              </div>

              <SceneMetadata
                wordCount={3500}
                readTime={15}
                lastUpdated="2024-11-25"
                version="1.0"
              />

              {/* Table of Contents - Inline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-8"
              >
                <TableOfContents items={tocItems} />
              </motion.div>

              {/* Setting Section */}
              <Section id="setting" title="Setting">
                <InfoBox>
                  <InfoRow label="Planet" value="Estra" />
                  <InfoRow label="Environment" value="Snow-covered world with futuristic cities featuring dense, towering buildings" />
                  <InfoRow label="Time" value="During city-wide evacuation due to attack" />
                </InfoBox>
              </Section>

              {/* Opening Cinematic */}
              <Section id="opening-cinematic" title="Opening Cinematic">
                <Paragraph>
                  The camera floats in the silence of space. Stars glitter against the endless void. Slowly, the solar system comes into view—distant planets orbiting a pale sun. The camera drifts past frozen moons and asteroid belts before descending toward Estra, a world wrapped in white.
                </Paragraph>

                <Paragraph>
                  The view pierces through the atmosphere. Snowflakes scatter across the lens. Below, a sprawling city emerges—towers of glass and steel rising like frozen monuments. The streets are empty. Emergency sirens wail in the distance.
                </Paragraph>

                <Paragraph>
                  The camera pushes toward a massive government building, its architecture cold and imposing. Snow clings to every surface. Red warning lights flash from nearby structures.
                </Paragraph>

                <DialogueBox speaker="Loudspeaker">
                  ATTENTION ALL CITIZENS. PROCEED TO EMERGENCY SHELTERS IMMEDIATELY. THIS IS NOT A DRILL. THE CITY IS UNDER ATTACK.
                </DialogueBox>
              </Section>

              {/* Interior */}
              <Section id="interior" title="Interior – Government Building – Server Room">
                <Paragraph>
                  Darkness. The hum of machines. Rows of glowing servers stretch into the shadows.
                </Paragraph>

                <Paragraph>
                  The MC crouches before a terminal, fingers dancing across a holographic interface. Data streams flicker across his visor. He inserts a small device into the console—a progress bar begins to fill.
                </Paragraph>

                <CodeDisplay>70%... 82%... 91%...</CodeDisplay>

                <Paragraph>
                  A soft sound. The MC freezes.
                </Paragraph>

                <Paragraph>
                  From between the server racks, a cat emerges—fur white as the snow outside, eyes sharp and curious. It watches him, tilting its head.
                </Paragraph>

                <Paragraph>
                  The MC exhales. Just a cat.
                </Paragraph>

                <CodeDisplay>100%. Download complete.</CodeDisplay>

                <Paragraph>
                  He pockets the device and turns to leave—but a red light blinks on a ceiling sensor. A surveillance drone has detected movement.
                </Paragraph>

                <DialogueBox speaker="Alert System">
                  ALERT. UNAUTHORIZED PRESENCE DETECTED. SECURITY PROTOCOL ENGAGED.
                </DialogueBox>

                <Paragraph>
                  The MC bolts. The cat sprints alongside him.
                </Paragraph>
              </Section>

              {/* Chase Begins */}
              <Section id="chase-begins" title="The Chase Begins">
                <Paragraph>
                  Corridor lights flicker to red. Behind him, the hum of drones grows louder. Three sleek surveillance units descend from ceiling hatches, their sensors locked onto him.
                </Paragraph>

                <Paragraph>
                  The first drone fires. An electro-pulse round crackles past his shoulder, scorching the wall.
                </Paragraph>

                <Paragraph>
                  He turns a corner. Dead end—nothing but a massive window overlooking the city.
                </Paragraph>

                <Paragraph>
                  The drones close in. Their weapons charge with a high-pitched whine.
                </Paragraph>

                <Paragraph>
                  No choice.
                </Paragraph>

                <Paragraph>
                  The MC sprints toward the glass. The cat runs beside him.
                </Paragraph>

                <Paragraph>
                  He leaps.
                </Paragraph>

                <Paragraph>
                  The window shatters.
                </Paragraph>
              </Section>

              {/* QTE #1 */}
              <Section id="qte-1" title="Mid-Air – Quick Time Event #1">
                <ScreenEffect>[SLOW MOTION ACTIVATES]</ScreenEffect>

                <Paragraph>
                  Glass fragments float around him like frozen rain. Wind howls. The city sprawls far below.
                </Paragraph>

                <Paragraph>
                  Beside him, the cat tumbles through the air—paws flailing, unable to reach anything solid.
                </Paragraph>

                <Paragraph italic>The cat begins to fall away from him.</Paragraph>

                <QTEPrompt>
                  <div className="text-center py-8 border-4 border-ice-400 rounded-xl bg-ice-900/30">
                    <div className="text-3xl mb-4">🐱 PRESS X TO SAVE THE CAT 🐱</div>
                    <div className="text-xl">⏱️ 3 SECONDS ⏱️</div>
                  </div>
                </QTEPrompt>

                <SubSection title="If Player Presses X in Time">
                  <Paragraph>
                    The MC twists his body mid-air. His hand shoots out. Fingers close around the cat's scruff. He pulls the animal tight against his chest.
                  </Paragraph>

                  <Paragraph>
                    They land hard on the adjacent rooftop. Snow cushions the impact. The MC rolls, protecting the cat beneath him.
                  </Paragraph>

                  <Paragraph>
                    He rises, breathing heavily. Gently, he sets the cat down. It looks up at him for a moment—then darts away into the city.
                  </Paragraph>

                  <Paragraph italic>A faint meow echoes as it disappears.</Paragraph>
                </SubSection>

                <SubSection title="If Player Fails to Press X">
                  <Paragraph>
                    The MC reaches out—but the cat slips past his fingers.
                  </Paragraph>

                  <Paragraph>
                    He watches it fall, disappearing into the snow and shadows below.
                  </Paragraph>

                  <Paragraph>
                    His jaw tightens. No time to mourn.
                  </Paragraph>

                  <Paragraph>
                    He lands on the adjacent rooftop alone, rolling to absorb the impact.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Rooftop Chase */}
              <Section id="rooftop-chase" title="Rooftop Chase">
                <Paragraph>
                  The drones burst through the shattered window behind him. Their sensors sweep the rooftops.
                </Paragraph>

                <DialogueBox speaker="Drone Voice">
                  TARGET LOCATED. ENGAGE.
                </DialogueBox>

                <Paragraph>
                  The MC runs.
                </Paragraph>

                <Paragraph>
                  Electro-pulse rounds scorch the snow around his feet. He vaults over ventilation units, slides beneath pipes, ducks behind signal towers.
                </Paragraph>

                <Paragraph>
                  The city stretches before him—an endless maze of rooftops, bridges, and towering structures. Snow falls heavier now, reducing visibility.
                </Paragraph>

                <Paragraph>
                  He leaps to another building. Then another. The drones follow relentlessly.
                </Paragraph>
              </Section>

              {/* Missile Strike */}
              <Section id="missile-strike" title="The Missile Strike">
                <Paragraph>
                  A sound cuts through the chaos—something louder than the drones. A deep, rumbling whistle from above.
                </Paragraph>

                <Paragraph>
                  The MC looks up.
                </Paragraph>

                <Paragraph>
                  A rocket missile tears through the clouds, trailing fire and smoke.
                </Paragraph>

                <Paragraph>
                  It strikes a building three rooftops away.
                </Paragraph>

                <SubSection title="Cinematic Explosion">
                  <Paragraph>
                    The world erupts in fire and light. The shockwave ripples outward, shattering windows and tearing metal from structures.
                  </Paragraph>

                  <Paragraph>
                    The pursuing drones are caught in the blast—spinning wildly before crashing into debris.
                  </Paragraph>

                  <Paragraph>
                    But the MC is too close.
                  </Paragraph>

                  <Paragraph>
                    The rooftop beneath him cracks. The building groans. It begins to tilt.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Survival Sequence */}
              <Section id="survival" title="Survival Sequence – The Collapse">
                <ScreenEffect>[SCREEN SHAKES VIOLENTLY]</ScreenEffect>

                <Paragraph>
                  Dust and smoke fill the air. The MC stumbles as the floor shifts beneath him.
                </Paragraph>

                <Paragraph>
                  The building is falling—and it's taking others with it. Structures collide in slow motion, glass and steel crumbling like dominoes.
                </Paragraph>

                <Paragraph>
                  He has to reach the ground. Now.
                </Paragraph>
              </Section>

              {/* Stage 1 */}
              <Section id="stage-1" title="Stage 1: Hold On">
                <Paragraph>
                  The rooftop splits open. The MC slides toward the edge, barely catching a metal beam.
                </Paragraph>

                <Paragraph>
                  His body dangles over the void. Below, floors collapse into each other. Fire blooms from broken gas lines.
                </Paragraph>

                <QTEPrompt>
                  <div className="text-center py-8 border-4 border-ice-400 rounded-xl bg-ice-900/30">
                    <div className="text-3xl mb-4">💪 MASH X REPEATEDLY TO HOLD ON 💪</div>
                    <div className="mb-4">
                      <div className="bg-ice-900 rounded-full h-4 w-full max-w-md mx-auto">
                        <div className="bg-gradient-to-r from-ice-500 to-ice-300 h-4 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <div className="text-sm text-ice-400">GRIP METER</div>
                  </div>
                </QTEPrompt>

                <Paragraph italic>
                  A grip meter appears on screen. It drains rapidly. Player must tap X rapidly to refill the meter and prevent falling.
                </Paragraph>

                <SubSection title="Outcomes">
                  <Paragraph>
                    <strong>Success:</strong> The MC pulls himself up onto a stable ledge inside the building.
                  </Paragraph>

                  <Paragraph>
                    <strong>Failure:</strong> His grip slips—he falls one floor but catches another beam. The grip meter resets with less time. (Player gets one retry before forced success with visible injury.)
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Stage 2 */}
              <Section id="stage-2" title="Stage 2: Dodge the Debris">
                <Paragraph>
                  The MC is inside the collapsing structure now. The interior is chaos—walls buckle, ceilings cave in, sparks fly from severed wires.
                </Paragraph>

                <Paragraph>
                  He runs toward a stairwell. Debris rains from above.
                </Paragraph>

                <SubSection title="Directional Quick Time Events">
                  <Paragraph italic>Prompts appear rapidly. Each has a 2-second window.</Paragraph>

                  <DebrisTable>
                    <thead>
                      <tr>
                        <th>Prompt</th>
                        <th>Obstacle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>⬅️ Press LEFT</td>
                        <td>Concrete slab falls from the right</td>
                      </tr>
                      <tr>
                        <td>➡️ Press RIGHT</td>
                        <td>Steel beam swings from the left</td>
                      </tr>
                      <tr>
                        <td>⬇️ Press DOWN</td>
                        <td>Ceiling collapses—slide under</td>
                      </tr>
                      <tr>
                        <td>⬅️ Press LEFT</td>
                        <td>Glass panel shatters toward him</td>
                      </tr>
                      <tr>
                        <td>⬇️ Press DOWN</td>
                        <td>Floor buckles—duck and roll</td>
                      </tr>
                    </tbody>
                  </DebrisTable>

                  <Paragraph>
                    <strong>Audio:</strong> Crashing sounds sync with each obstacle. Orchestral music builds tension.
                  </Paragraph>

                  <Paragraph>
                    <strong>Visual:</strong> Slow-motion activates briefly for each dodge. Dust particles float in the air.
                  </Paragraph>
                </SubSection>

                <SubSection title="Outcomes">
                  <Paragraph>
                    <strong>Success:</strong> The MC weaves through the chaos, emerging at the stairwell entrance.
                  </Paragraph>

                  <Paragraph>
                    <strong>Partial Failure:</strong> Missing prompts causes the MC to stumble or get hit. Visual damage appears—torn jacket, cut on face, limping animation. But he continues.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Stage 3 */}
              <Section id="stage-3" title="Stage 3: The Collapsing Stairwell">
                <Paragraph>
                  The stairwell spirals downward—but entire sections are missing. Fires burn on lower floors. The building tilts further, groaning like a dying beast.
                </Paragraph>

                <Paragraph>
                  The MC must jump from platform to platform.
                </Paragraph>

                <SubSection title="Timed Jumps">
                  <QTEPrompt>
                    <div className="text-center py-8 border-4 border-ice-400 rounded-xl bg-ice-900/30">
                      <div className="text-2xl mb-4">⭕ PRESS X AT THE RIGHT MOMENT ⭕</div>
                      <div className="text-sm text-ice-400 mb-4">TIMING</div>
                      <div className="flex justify-center">
                        <div className="w-32 h-32 rounded-full border-4 border-ice-400 relative">
                          <div className="absolute top-2 left-1/2 w-2 h-2 bg-ice-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </QTEPrompt>

                  <Paragraph italic>
                    Player must press X when the marker enters the highlighted zone.
                  </Paragraph>

                  <JumpTable>
                    <thead>
                      <tr>
                        <th>Jump</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Jump 1</td>
                        <td>Leap across a 3-meter gap to a hanging platform</td>
                      </tr>
                      <tr>
                        <td>Jump 2</td>
                        <td>Swing from a broken railing to a lower staircase</td>
                      </tr>
                      <tr>
                        <td>Jump 3</td>
                        <td>Sprint across a crumbling floor before it collapses</td>
                      </tr>
                      <tr>
                        <td>Jump 4</td>
                        <td>Final leap toward a blown-out window on a lower floor</td>
                      </tr>
                    </tbody>
                  </JumpTable>
                </SubSection>

                <SubSection title="Outcomes">
                  <Paragraph>
                    <strong>Success:</strong> The MC reaches the window, breathing heavily but alive.
                  </Paragraph>

                  <Paragraph>
                    <strong>Partial Failure:</strong> Mistimed jumps cause stumbles or near-falls. The MC catches edges at the last second, pulling himself up with visible strain.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Stage 4 */}
              <Section id="stage-4" title="Stage 4: The Final Drop">
                <Paragraph>
                  The MC stands at the blown-out window. Below, the street is visible—maybe 15 meters down. Snow covers abandoned vehicles and debris.
                </Paragraph>

                <Paragraph>
                  Behind him, the building screams as it collapses inward. There's no time left.
                </Paragraph>

                <Paragraph>
                  He jumps.
                </Paragraph>

                <ScreenEffect>[SLOW MOTION ACTIVATES]</ScreenEffect>

                <Paragraph>
                  The MC plummets through the air. Wind whips past him. Snow swirls around his body.
                </Paragraph>

                <Paragraph>
                  The ground rushes up.
                </Paragraph>

                <QTEPrompt>
                  <div className="text-center py-8 border-4 border-ice-400 rounded-xl bg-ice-900/30">
                    <div className="text-3xl mb-4">🔄 PRESS X TO ROLL AND LAND SAFELY 🔄</div>
                    <div className="text-xl mb-2">[ ● ]</div>
                    <div className="text-sm text-ice-400">PERFECT TIMING</div>
                  </div>
                </QTEPrompt>

                <SubSection title="Outcomes">
                  <Paragraph>
                    <strong>Success:</strong> The MC tucks his body and rolls perfectly, dispersing the impact. He slides across the snow-covered street, coming to a stop against an abandoned vehicle. He's battered but alive.
                  </Paragraph>

                  <Paragraph>
                    <strong>Failure:</strong> The MC lands hard, crumpling onto the ground. He cries out in pain. After a moment, he forces himself up—limping badly, one arm clutching his ribs. (Gameplay continues with injured state.)
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Aftermath */}
              <Section id="aftermath" title="Ground Level – The Aftermath">
                <Paragraph>
                  Silence.
                </Paragraph>

                <Paragraph>
                  The MC lies in the snow, chest heaving. Above him, the buildings finish their collapse—a mountain of steel and glass settling into ruin. Smoke rises into the gray sky.
                </Paragraph>

                <Paragraph>
                  The drones are gone—destroyed in the blast or buried in debris.
                </Paragraph>

                <Paragraph>
                  He pushes himself up slowly. His body aches. His breath fogs in the frozen air.
                </Paragraph>

                <Paragraph>
                  Around him, the city is unrecognizable. Fires burn in the distance. Emergency sirens have gone silent. The only sound is the wind—and the occasional groan of settling wreckage.
                </Paragraph>

                <Paragraph>
                  He needs to hide.
                </Paragraph>
              </Section>

              {/* Junkyard */}
              <Section id="junkyard" title="The Junkyard">
                <Paragraph>
                  The MC stumbles through the empty streets, staying low, moving between shadows. Every sound makes him flinch—the creak of metal, the crack of ice, the distant rumble of explosions elsewhere in the city.
                </Paragraph>

                <Paragraph>
                  He finds it: a junkyard on the city's edge. Mountains of rusted machines, broken vehicles, discarded technology from a hundred years of progress.
                </Paragraph>

                <Paragraph>
                  He slips inside, weaving between towers of scrap. Finally, he collapses behind a corroded transport shuttle, hidden from view.
                </Paragraph>

                <Paragraph>
                  His hands tremble as he pulls out the stolen data device. Still intact. Still blinking with encrypted files.
                </Paragraph>

                <Paragraph>
                  He allows himself a moment to breathe.
                </Paragraph>
              </Section>

              {/* Arrival */}
              <Section id="arrival" title="The Arrival">
                <Paragraph>
                  A sound breaks the silence.
                </Paragraph>

                <Paragraph>
                  Rotor blades. Growing louder.
                </Paragraph>

                <Paragraph>
                  The MC presses himself against the shuttle, peering through a gap in the scrap.
                </Paragraph>

                <Paragraph>
                  A space helicopter descends from the clouds—sleek, black, unmarked. It hovers above the junkyard, searchlights sweeping through the debris.
                </Paragraph>

                <Paragraph>
                  The MC holds his breath.
                </Paragraph>

                <Paragraph>
                  The helicopter's side hatch slides open.
                </Paragraph>

                <Paragraph>
                  A figure stands in the doorway—face obscured by shadow and snow.
                </Paragraph>

                <Paragraph>
                  Something is thrown from the helicopter.
                </Paragraph>

                <Paragraph>
                  A metal suitcase tumbles through the air—spinning, falling—directly toward the MC.
                </Paragraph>

                <Paragraph>
                  He tries to move, but he's too slow.
                </Paragraph>

                <Paragraph>
                  The suitcase strikes him square in the chest.
                </Paragraph>

                <Paragraph>
                  <strong>THUD.</strong>
                </Paragraph>

                <Paragraph>
                  He collapses into the snow.
                </Paragraph>

                <Paragraph>
                  The camera pushes in on his face—eyes wide, mouth gasping, consciousness fading.
                </Paragraph>

                <Paragraph>
                  The helicopter's rotors grow distant.
                </Paragraph>

                <Paragraph>
                  Snow begins to cover his body.
                </Paragraph>

                <ScreenEffect>[SCREEN FADES TO BLACK]</ScreenEffect>

                <div className="text-center text-3xl font-bold text-ice-100 my-12">
                  End of Scene 1
                </div>
              </Section>

              {/* Summary */}
              <Section id="summary" title="Summary of Player Interactions">
                <InteractionsTable>
                  <thead>
                    <tr>
                      <th>Moment</th>
                      <th>Type</th>
                      <th>Prompt</th>
                      <th>Time Window</th>
                      <th>Consequence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mid-air cat rescue</td>
                      <td>Quick Time Event</td>
                      <td>Press X</td>
                      <td>3 seconds</td>
                      <td>Cat saved or lost</td>
                    </tr>
                    <tr>
                      <td>Holding the ledge</td>
                      <td>Button Mash</td>
                      <td>Mash X</td>
                      <td>Until meter fills</td>
                      <td>Fall or hold on</td>
                    </tr>
                    <tr>
                      <td>Debris dodging</td>
                      <td>Directional QTE</td>
                      <td>←, →, ↓ prompts</td>
                      <td>2 seconds each</td>
                      <td>Clean escape or injuries</td>
                    </tr>
                    <tr>
                      <td>Stairwell jumps</td>
                      <td>Timed Press</td>
                      <td>Press X at right moment</td>
                      <td>Timing-based</td>
                      <td>Smooth or stumbling descent</td>
                    </tr>
                    <tr>
                      <td>Final landing</td>
                      <td>Timed Press</td>
                      <td>Press X to roll</td>
                      <td>Timing-based</td>
                      <td>Safe landing or injured state</td>
                    </tr>
                  </tbody>
                </InteractionsTable>
              </Section>

              {/* Footer */}
              <div className="glass rounded-xl p-6 mt-12 text-center text-ice-400 text-sm">
                <p>Document Version: 1.0 • Game: ASEP</p>
                <p>Author: MANOJ TIWARI RAMCHANDRA</p>
                <p>Last Updated: 25/11/2025</p>
              </div>
            </motion.div>
      </div>
    </div>
  );
}

// Component Helpers
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="glass rounded-xl p-8 mb-8 scroll-mt-24">
      <h2 className="text-3xl font-bold mb-6 text-ice-100 border-b border-ice-700 pb-3">
        {title}
      </h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 pl-6 border-l-4 border-ice-600">
      <h4 className="text-xl font-semibold mb-3 text-ice-200">{title}</h4>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

function Paragraph({ children, italic = false }: { children: React.ReactNode; italic?: boolean }) {
  return (
    <p className={`text-ice-300 leading-relaxed ${italic ? 'italic text-ice-400' : ''}`}>
      {children}
    </p>
  );
}

function DialogueBox({ speaker, children }: { speaker: string; children: React.ReactNode }) {
  return (
    <div className="bg-ice-900/40 border-l-4 border-ice-400 p-4 rounded my-4">
      <div className="text-ice-200 font-semibold mb-2">{speaker}:</div>
      <div className="text-ice-300 italic">&quot;{children}&quot;</div>
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
      <span className="text-ice-400 font-semibold w-32">{label}:</span>
      <span className="text-ice-300 flex-1">{value}</span>
    </div>
  );
}

function CodeDisplay({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black/40 rounded p-3 font-mono text-ice-300 text-sm my-3">
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

function QTEPrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      {children}
    </div>
  );
}

function DebrisTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-left text-ice-300">
        {children}
      </table>
    </div>
  );
}

function JumpTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-left text-ice-300">
        {children}
      </table>
    </div>
  );
}

function InteractionsTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-ice-300 text-sm">
        {children}
      </table>
    </div>
  );
}
