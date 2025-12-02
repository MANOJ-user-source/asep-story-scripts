'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import TableOfContents from '@/components/TableOfContents';
import ShareButtons from '@/components/ShareButtons';
import SceneMetadata from '@/components/SceneMetadata';

const tocItems = [
  { id: 'overview', title: 'Scene Overview', level: 1 },
  { id: 'consciousness', title: 'Regaining Consciousness', level: 1 },
  { id: 'suitcase', title: 'The Mysterious Suitcase', level: 1 },
  { id: 'second-blast', title: 'The Second Blast', level: 1 },
  { id: 'gathering', title: 'Gathering Himself', level: 1 },
  { id: 'riding-ruins', title: 'Riding Through the Ruins', level: 1 },
  { id: 'bridge', title: 'The Bridge', level: 1 },
  { id: 'shelter-arrival', title: 'Arriving at the Shelter', level: 1 },
  { id: 'mother-confrontation', title: 'The Slap', level: 1 },
  { id: 'cat-choice', title: 'The Cat Decision', level: 1 },
  { id: 'father-arrival', title: "Father's Arrival", level: 1 },
  { id: 'closing', title: 'Closing Shot', level: 1 },
  { id: 'technical', title: 'Technical Notes', level: 1 },
];

export default function Scene2Part1() {
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
                Scene 2 - Part 1: The Awakening
              </motion.h2>

              <div className="flex flex-col items-center gap-4 mb-8">
                <div className="text-ice-400 text-sm">
                  <span>Author: MANOJ TIWARI RAMCHANDRA</span>
                </div>
                <ShareButtons
                  title="Scene 2 - Part 1: The Awakening"
                  url="/scripts/scene-2-part-1-the-awakening"
                />
              </div>

              <SceneMetadata
                wordCount={4200}
                readTime={18}
                lastUpdated="2025-12-02"
                version="1.0"
              />

              {/* Scene Overview */}
              <Section id="overview" title="Scene Overview">
                <InfoBox>
                  <InfoRow label="Location" value="Outskirts of City-1 → Bridge → City-A Emergency Shelter" />
                  <InfoRow label="Time" value="Late Afternoon / Early Evening (3-4 hours after the attack)" />
                  <InfoRow label="Weather" value="Heavy snowfall, grey skies, visibility low" />
                  <InfoRow label="Mood" value="Disorientation → Determination → Emotional Confrontation" />
                </InfoBox>
              </Section>

              {/* Sequence 2.1 */}
              <Section id="consciousness" title="Sequence 2.1 — Regaining Consciousness">
                <ScreenEffect>[FADE IN FROM BLACK]</ScreenEffect>

                <Paragraph>
                  Screen slowly brightens from complete darkness. Blurred vision. Sound is muffled—wind howling, distant echoes.
                </Paragraph>

                <SubSection title="Visual">
                  <Paragraph>
                    • First-person POV: MC&apos;s eyes flutter open<br/>
                    • Everything is white—snow has partially covered his body<br/>
                    • His breath is visible in the freezing air<br/>
                    • Fingers twitch, feeling returns slowly
                  </Paragraph>
                </SubSection>

                <SubSection title="Audio">
                  <Paragraph>
                    • Muffled heartbeat (slow, growing stronger)<br/>
                    • Wind whistling<br/>
                    • Distant, faint sounds of sirens and chaos from the city
                  </Paragraph>
                </SubSection>

                <DialogueBox speaker="MC" internal>
                  ...Where... am I?
                </DialogueBox>

                <Paragraph>
                  MC slowly pushes himself up, snow falling off his jacket. He shivers violently.
                </Paragraph>

                <Paragraph>
                  Third-person shot: MC sitting up in the snow crater. His bike lies nearby, partially buried. The landscape is eerily quiet—white snow, grey sky.
                </Paragraph>
              </Section>

              {/* Sequence 2.2 */}
              <Section id="suitcase" title="Sequence 2.2 — The Mysterious Suitcase">
                <Paragraph>
                  MC turns his head and notices something beside him.
                </Paragraph>

                <Paragraph>
                  Close-up: A large WHITE METALLIC SUITCASE lies half-buried in the snow. It has strange markings/symbols on it. A faint blue light pulses from within the seams. Steam rises where it touches the snow (it&apos;s warm).
                </Paragraph>

                <DialogueBox speaker="MC">
                  What... is this?
                </DialogueBox>

                <Paragraph>
                  MC reaches toward it hesitantly. His fingers brush the cold metal surface.
                </Paragraph>

                <DialogueBox speaker="MC" internal>
                  This is what hit me... from that helicopter... Why would they throw this? What&apos;s inside?
                </DialogueBox>

                <Paragraph>
                  He tries to open it—LOCKED. No visible mechanism.
                </Paragraph>

                <Paragraph>
                  Extreme close-up: MC&apos;s reflection in the metallic surface. His face is bruised, snow in his hair. Eyes filled with confusion and questions.
                </Paragraph>

                <DialogueBox speaker="MC">
                  Why me...?
                </DialogueBox>
              </Section>

              {/* Sequence 2.3 */}
              <Section id="second-blast" title="Sequence 2.3 — The Second Blast">
                <Paragraph>
                  SUDDENLY—A massive explosion in the distance.
                </Paragraph>

                <Paragraph>
                  Wide shot: A pillar of fire and smoke rises from City-1&apos;s center. The shockwave ripples through the snow. MC shields his face instinctively.
                </Paragraph>

                <SubSection title="Audio">
                  <Paragraph>
                    • BOOM—deep, resonating explosion<br/>
                    • Glass shattering in the distance<br/>
                    • Car alarms triggering<br/>
                    • Birds scattering
                  </Paragraph>
                </SubSection>

                <Paragraph>
                  MC&apos;s eyes widen. Reality crashes back into him.
                </Paragraph>

                <DialogueBox speaker="MC">
                  No... NO! I have to move. NOW.
                </DialogueBox>
              </Section>

              {/* Sequence 2.4 */}
              <Section id="gathering" title="Sequence 2.4 — Gathering Himself">
                <Paragraph>
                  MC forces himself to his feet, stumbling at first.
                </Paragraph>

                <QTEPrompt>
                  <div className="text-center py-8 border-4 border-ice-400 rounded-xl bg-ice-900/30">
                    <div className="text-2xl mb-4">💪 MASH (A/X) TO STAND UP 💪</div>
                    <div className="text-lg text-ice-300">MC struggling against numbness and cold</div>
                  </div>
                </QTEPrompt>

                <Paragraph>
                  MC brushes snow off his jacket. He looks at his bike—still intact. He looks at the suitcase—makes a decision.
                </Paragraph>

                <DialogueBox speaker="MC" internal>
                  Whatever this thing is... it fell from THEIR helicopter. It might have answers. I&apos;m taking it.
                </DialogueBox>

                <Paragraph>
                  MC lifts the suitcase—it&apos;s surprisingly light despite its size. He straps it to the back of his bike. Mounts the bike, kicks the snow off the wheels. Turns the ignition.
                </Paragraph>

                <Paragraph>
                  Engine sputters... then ROARS to life. The exhaust creates a cloud in the cold air.
                </Paragraph>

                <Paragraph>
                  The bike&apos;s notification panel lights up—dozens of alerts flash across the screen.
                </Paragraph>

                <CodeDisplay>
                  BIKE NOTIFICATION PANEL:<br/>
                  📞 127 Missed Calls<br/>
                  <br/>
                  • Mom (43 calls)<br/>
                  • Dad (38 calls)<br/>
                  • Uncle (22 calls)<br/>
                  • Aunt (14 calls)<br/>
                  • Cousin (10 calls)<br/>
                  • [+5 more contacts]<br/>
                  <br/>
                  💬 89 Unread Messages
                </CodeDisplay>

                <Paragraph>
                  MC stares at the screen for a moment. The sheer number of calls hits him. He exhales slowly, a mix of guilt and frustration crossing his face.
                </Paragraph>

                <DialogueBox speaker="MC" internal>
                  Looks like I might be in trouble now...
                </DialogueBox>

                <Paragraph>
                  He revs the engine, grips the handlebars tightly.
                </Paragraph>

                <DialogueBox speaker="MC">
                  Let&apos;s go.
                </DialogueBox>

                <Paragraph>
                  The bike&apos;s navigation system activates automatically. A holographic display projects above the handlebars.
                </Paragraph>

                <CodeDisplay>
                  NAVIGATION SYSTEM:<br/>
                  <br/>
                  📍 Current Location: City-1 Outskirts (Crater Zone)<br/>
                  🎯 Destination: City-A Emergency Shelter - Sector 7<br/>
                  <br/>
                  Distance: 4.2 km<br/>
                  Estimated Time: 12 minutes<br/>
                  <br/>
                  ⚠️ WARNING: Multiple road blockages detected<br/>
                  ⚠️ Route optimization in progress...<br/>
                  <br/>
                  → Route calculated<br/>
                  → Follow highlighted path
                </CodeDisplay>

                <Paragraph>
                  A glowing blue path appears on the snow-covered road ahead, guiding him through the devastation. MC accelerates, following the route.
                </Paragraph>
              </Section>

              {/* Sequence 2.5 */}
              <Section id="riding-ruins" title="Sequence 2.5 — Riding Through the Ruins">
                <ScreenEffect>[CINEMATIC DRIVING SEQUENCE]</ScreenEffect>

                <InfoBox>
                  <InfoRow label="Music Cue" value='"Frozen Requiem" — Epic Orchestral/Emotional Track' />
                  <InfoRow label="Style" value="Slow build, piano intro, swelling strings, melancholic but determined" />
                </InfoBox>

                <SubSection title="Visual Montage — Destroyed City-1">
                  <Paragraph className="space-y-3">
                    <strong>Shot 1 — Wide Shot:</strong> MC&apos;s bike moving through streets covered in debris. Collapsed buildings on either side. Fires burning in the distance. Smoke mixing with snowfall.<br/><br/>

                    <strong>Shot 2 — Tracking Shot:</strong> Following MC from behind. He weaves between abandoned cars. A child&apos;s toy lies in the snow (subtle detail). Emergency lights flash from a crushed ambulance.<br/><br/>

                    <strong>Shot 3 — Close-up:</strong> MC&apos;s face—jaw clenched, eyes focused. Snow hitting his visor. The reflection of flames in his eyes.<br/><br/>

                    <strong>Shot 4 — Wide Shot:</strong> A massive crater where a building once stood. MC rides along the edge. Bodies covered with sheets visible in the background (tastefully obscured).<br/><br/>

                    <strong>Shot 5 — POV Shot:</strong> MC&apos;s perspective. The navigation on his bike display shows the route. Destination: &quot;CITY-A EMERGENCY SHELTER — 4.2 KM&quot;<br/><br/>

                    <strong>Shot 6 — Aerial Shot:</strong> City-1 from above. Half the city is destroyed—smoking ruins. The other half stands damaged but intact. The BRIDGE visible in the distance.
                  </Paragraph>
                </SubSection>

                <SubSection title="Audio During Montage">
                  <Paragraph>
                    • Background music dominates<br/>
                    • Occasional sounds break through: Distant screams, Collapsing structures, Emergency broadcasts (muffled, unintelligible), MC&apos;s heavy breathing
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Sequence 2.6 */}
              <Section id="bridge" title="Sequence 2.6 — The Bridge (City-1 to City-A)">
                <Paragraph>
                  MC approaches the bridge—a massive structure spanning a COLD, RUSHING RIVER below. Ice chunks float in the dark water. The bridge is intact but damaged—cracks in the concrete.
                </Paragraph>

                <CodeDisplay>
                  SIGNAGE VISIBLE:<br/>
                  &quot;CITY-1 ← | → CITY-A&quot;<br/>
                  &quot;EMERGENCY EVACUATION ROUTE&quot;
                </CodeDisplay>

                <SubSection title="Visual Contrast">
                  <Paragraph>
                    • Behind MC: City-1—half destroyed, fires, smoke, chaos<br/>
                    • Ahead of MC: City-A—intact, lights on, untouched by destruction
                  </Paragraph>
                </SubSection>

                <Paragraph>
                  MC pauses briefly at the bridge entrance.
                </Paragraph>

                <DialogueBox speaker="MC" internal>
                  City-A... it&apos;s not touched. The attack... it was only on City-1? Why...?
                </DialogueBox>

                <Paragraph>
                  He accelerates across the bridge. Side shot: MC crossing the bridge. The frozen river flows violently below. Wind whips snow across the bridge. City-A grows larger ahead.
                </Paragraph>

                <InfoBox>
                  <InfoRow label="Music" value="Music swells as he crosses—a moment of hope entering the devastation" />
                </InfoBox>
              </Section>

              {/* Sequence 2.7 */}
              <Section id="shelter-arrival" title="Sequence 2.7 — Arriving at the Shelter">
                <Paragraph>
                  MC enters City-A—the contrast is stark. Streets are intact but EMPTY. Everyone has evacuated to shelters. Emergency lights flash at intersections.
                </Paragraph>

                <CodeDisplay>
                  BIKE DISPLAY:<br/>
                  &quot;DESTINATION REACHED&quot;<br/>
                  &quot;CITY-A EMERGENCY BUNKER — SECTOR 7&quot;
                </CodeDisplay>

                <Paragraph>
                  A large underground shelter entrance. Heavy blast doors (partially open). Military/emergency personnel stationed outside. Only 5-6 PEOPLE stand outside the shelter entrance—they came out in a hurry, looking anxious. Most people remain inside.
                </Paragraph>

                <Paragraph>
                  MC slows down and parks his bike near the entrance.
                </Paragraph>

                <Paragraph>
                  MC dismounts, beginning to remove his helmet. The small group of people near the entrance are talking anxiously among themselves. One of them is MC&apos;s MOTHER—she&apos;s scanning the area desperately.
                </Paragraph>
              </Section>

              {/* Sequence 2.8 */}
              <Section id="mother-confrontation" title="Sequence 2.8 — The Slap (Mother's Confrontation)">
                <Paragraph>
                  MC is still parking his bike, securing the kickstand.
                </Paragraph>

                <Paragraph>
                  MC&apos;s mother suddenly NOTICES him. Her eyes widen in shock and recognition. She breaks away from the small group.
                </Paragraph>

                <Paragraph>
                  MC&apos;s mother walks toward him—not running, but an ANGRY, purposeful stride. Her face shows fury mixed with overwhelming relief. The other people at the entrance watch. MC looks up, helmet still in hand.
                </Paragraph>

                <DialogueBox speaker="MC">
                  Mom—!
                </DialogueBox>

                <ScreenEffect>[VISUAL — SUDDEN IMPACT]</ScreenEffect>

                <Paragraph>
                  Mother reaches MC. Her hand rises without hesitation. ***SLAP*** The sound echoes sharply. MC&apos;s head snaps to the side. Snow falls around them.
                </Paragraph>

                <SubSection title="Audio">
                  <Paragraph>
                    • Sharp SLAP sound<br/>
                    • All other audio fades momentarily<br/>
                    • Ringing silence
                  </Paragraph>
                </SubSection>

                <Paragraph>
                  Close-up: MC&apos;s face—shock, stinging pain, confusion. Close-up: Mother&apos;s face—tears streaming, expression of raw fury and relief. Her hand trembles after the slap.
                </Paragraph>

                <DialogueBox speaker="Mother">
                  WHERE WERE YOU?!
                </DialogueBox>

                <Paragraph italic>
                  Beat of silence. MC opens his mouth but she continues.
                </Paragraph>

                <DialogueBox speaker="Mother">
                  30,000 people! THIRTY THOUSAND people in this whole city! EVERYONE was in the shelter! EVERYONE! And only ONE person is missing! ONE! And that&apos;s YOU! Nowhere to be found! WHERE WERE YOU?!
                </DialogueBox>

                <Paragraph>
                  MC touches his cheek where she slapped him, guilt washing over his face.
                </Paragraph>

                <DialogueBox speaker="MC">
                  Calm down... I&apos;m alive, aren&apos;t I? I&apos;m sorry.
                </DialogueBox>

                <Paragraph>
                  Mother&apos;s anger falters, tears flowing freely. She looks like she wants to hit him again and hug him at the same time. Her hands tremble.
                </Paragraph>

                <Paragraph>
                  Suddenly—a sound from behind them interrupts the moment. A FAMILY in the small group begins to cry. A woman sobs into her husband&apos;s shoulder. Their young daughter clings to them, also crying.
                </Paragraph>

                <DialogueBox speaker="Woman (Family)">
                  Mittens... our Mittens is still in City-1... We couldn&apos;t find her... we had to leave her...
                </DialogueBox>

                <DialogueBox speaker="Husband">
                  I know... I know, honey... maybe she... maybe she&apos;s safe somewhere...
                </DialogueBox>

                <Paragraph>
                  The daughter cries harder. MC glances at the crying family. A slight, bitter smirk crosses his face despite the tension. His mother is still staring at him, furious.
                </Paragraph>

                <DialogueBox speaker="MC">
                  Looks like I&apos;m not the only one who was out there.
                </DialogueBox>

                <CodeDisplay>
                  [AUDIO — ROBOTIC ANNOUNCEMENT FROM INSIDE SHELTER]<br/>
                  &quot;ATTENTION. PLEASE DO NOT LEAVE THE BUNKER YET.&quot;<br/>
                  &quot;THE SITUATION IS NOT FULLY UNDER CONTROL.&quot;<br/>
                  &quot;REMAIN INSIDE UNTIL FURTHER NOTICE.&quot;<br/>
                  &quot;WARNING SYSTEMS ARE STILL ACTIVE.&quot;
                </CodeDisplay>

                <Paragraph>
                  The small group outside looks nervous. Some glance back at the shelter entrance. The emergency lights continue to flash. MC&apos;s mother ignores the announcement, focused entirely on her son.
                </Paragraph>

                <DialogueBox speaker="Mother">
                  Don&apos;t you DARE make jokes right now. How many times do I have to tell you to not run around like this?! How many times?!
                </DialogueBox>

                <Paragraph>
                  Mother&apos;s anger remains, but tears flow freely. Her voice cracks with emotion but she doesn&apos;t break down. She&apos;s frustrated, terrified, but trying to hold herself together.
                </Paragraph>

                <Paragraph>
                  MC&apos;s smirk fades. He steps closer to his mother. MC extends his arms and pulls his mother into a hug—not a desperate embrace, more like comforting a friend. Casual but sincere, patting her back. His expression is tired, guilty.
                </Paragraph>

                <DialogueBox speaker="MC">
                  I&apos;m sorry, Mom... I&apos;m here now.
                </DialogueBox>

                <Paragraph>
                  Mother doesn&apos;t fully hug back—still angry, but allows the comfort. MC gently guides his mother, starting to walk toward the shelter entrance. They walk together, mother still wiping tears, MC&apos;s arm around her shoulder. They approach the crying family who are still grieving.
                </Paragraph>
              </Section>

              {/* Sequence with Cat Choice */}
              <Section id="cat-choice" title="The Cat Decision">
                <Paragraph>
                  As MC and his mother pass the family, the young DAUGHTER notices MC. Her tear-filled eyes look up at him hopefully. She pulls on her mother&apos;s sleeve, then steps toward MC.
                </Paragraph>

                <DialogueBox speaker="Daughter">
                  Excuse me... mister? Did you... did you see our cat? She was in City-1... her name is Mittens...
                </DialogueBox>

                <Paragraph>
                  MC looks at the girl, caught off guard. The MOTHER and FATHER exchange a glance—they know it&apos;s unlikely. They watch their daughter with sad, knowing expressions. MC&apos;s mother watches the exchange quietly.
                </Paragraph>

                <ScreenEffect>[CHOICE POINT — PLAYER DECISION FROM PREVIOUS SCENE]</ScreenEffect>

                <SubSection title="If MC Saved the Cat">
                  <DialogueBox speaker="MC">
                    Mittens? Yeah... I think I saw her. She might be safe and alive. We&apos;ll find her soon, okay? Don&apos;t worry.
                  </DialogueBox>

                  <Paragraph>
                    The daughter&apos;s eyes widen with hope. The daughter&apos;s face lights up slightly, smiling through tears. The mother kneels down, pulling her daughter close. The father puts his hand on the daughter&apos;s head gently. They focus on comforting their daughter, not questioning MC.
                  </Paragraph>

                  <DialogueBox speaker="Mother (Family)">
                    See, sweetie? Mittens might be okay... Let&apos;s hope for the best, alright?
                  </DialogueBox>

                  <DialogueBox speaker="Daughter">
                    Really? You promise?
                  </DialogueBox>

                  <DialogueBox speaker="MC">
                    I promise we&apos;ll look for her.
                  </DialogueBox>

                  <Paragraph>
                    The family focuses on their daughter, trying to give her hope. MC&apos;s mother looks at him with confusion but also quiet pride. MC gives a small, tired smile.
                  </Paragraph>
                </SubSection>

                <SubSection title="If MC Did Not Save the Cat">
                  <DialogueBox speaker="MC">
                    Ohh... I wasn&apos;t in City-1. I don&apos;t know anything about your cat, sorry.
                  </DialogueBox>

                  <Paragraph>
                    MC starts to move away, trying to leave. He gently tugs his mother&apos;s arm, urging her to keep walking. His expression is evasive, uncomfortable.
                  </Paragraph>

                  <Paragraph>
                    The daughter&apos;s face crumbles. She starts crying harder, covering her face. The mother immediately kneels down, pulling her daughter into her arms. The father crouches beside them, wrapping his arms around both.
                  </Paragraph>

                  <DialogueBox speaker="Mother (Family)">
                    Shh, shh... it&apos;s okay, baby... We&apos;ll... we&apos;ll figure it out...
                  </DialogueBox>

                  <DialogueBox speaker="Father (Family)">
                    Maybe someone else saw her, sweetheart. Don&apos;t worry... we&apos;ll keep looking.
                  </DialogueBox>

                  <Paragraph>
                    They focus entirely on their daughter, trying to comfort her grief. MC and his mother are a few steps away now. MC&apos;s mother glances back at the crying family, then looks at her son. Her expression shifts—confusion, suspicion. She&apos;s processing what he said: &quot;I wasn&apos;t in City-1&quot;
                  </Paragraph>

                  <DialogueBox speaker="MC&apos;s Mother">
                    What did you mean... you weren&apos;t in City-1?
                  </DialogueBox>

                  <Paragraph>
                    MC doesn&apos;t answer, avoiding her gaze, continuing toward the shelter entrance. The daughter continues to sob in her parents&apos; arms behind them. MC walks faster, wanting to escape the conversation. His mother follows, still confused and suspicious.
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Sequence 2.8B */}
              <Section id="father-arrival" title="Sequence 2.8B — Father's Arrival">
                <Paragraph>
                  Movement from the shelter entrance. A MAN emerges—MC&apos;s FATHER. He&apos;s wearing an official uniform/vest (emergency coordinator or shelter supervisor). His expression is serious, authoritative, but softens when he sees MC. The small group outside turns to look at him.
                </Paragraph>

                <DialogueBox speaker="Father">
                  Everyone, please. A few more hours—please stay inside the shelter while we scan the situation. We need to ensure it&apos;s completely safe before anyone goes back out.
                </DialogueBox>

                <Paragraph>
                  He gestures calmly toward the shelter entrance. The small group nods, starting to move back toward the entrance. The family with the daughter begins to walk inside, still comforting their child. MC and his mother are still approaching.
                </Paragraph>

                <Paragraph>
                  A ROBOT (humanoid security/analysis unit) approaches the father from inside the shelter. The robot is sleek, utilitarian—clearly designed for emergency response. It carries a tablet-like display. Its movements are precise and efficient.
                </Paragraph>

                <DialogueBox speaker="Robot">
                  Sir, status report: No attacks detected for the past 4 to 5 hours. City-1 appears calm. All residents from City-1 successfully alerted and sheltered in City-A. Zero casualties reported. Should we begin analysis of City-1?
                </DialogueBox>

                <Paragraph>
                  Father listens carefully, processing the information. MC and his mother are close enough now to hear the conversation. MC&apos;s expression shifts—relieved that there are no casualties, but still processing everything.
                </Paragraph>

                <DialogueBox speaker="Father">
                  Send the drones first. Full aerial scan of the destruction zones. Once we have a complete map, then we&apos;ll send the robots in to analyze the situation on the ground. I want every sector documented before anyone goes back in there.
                </DialogueBox>

                <DialogueBox speaker="Robot">
                  Understood. Deploying reconnaissance drones now.
                </DialogueBox>

                <Paragraph>
                  The robot turns and walks away from the camera. Its form disappears back into the shelter entrance. The sound of mechanical footsteps fades.
                </Paragraph>

                <Paragraph>
                  Father turns and finally sees MC and his mother approaching. MC has his arm around his mother&apos;s shoulder, walking her toward the entrance. His professional demeanor cracks for a moment. Relief floods his face, but also worry and frustration. MC meets his father&apos;s eyes—guilty, tired.
                </Paragraph>

                <Paragraph>
                  As MC and his mother reach him, the father steps forward. He sees MC comforting his mother. Without a word, the father puts his arm around MC from the other side. Now all three are connected—father&apos;s arm around MC, MC&apos;s arm around mother. They form a united front, walking together.
                </Paragraph>

                <DialogueBox speaker="Father">
                  No more bike for you.
                </DialogueBox>

                <Paragraph italic>
                  Beat. His voice is stern but laced with relief.
                </Paragraph>

                <Paragraph>
                  MC doesn&apos;t argue. He just nods slightly, too exhausted to protest.
                </Paragraph>

                <Paragraph>
                  The three of them walk together toward the shelter entrance as one unit. Father&apos;s arm around MC&apos;s shoulder—protective, grounding. MC&apos;s arm still around his mother. Mother walks close, still wiping tears but finding comfort in both of them. They pass through the heavy blast doors. Snow continues to fall behind them.
                </Paragraph>
              </Section>

              {/* Sequence 2.9 */}
              <Section id="closing" title="Sequence 2.9 — Closing Shot (Cinematic Finale)">
                <ScreenEffect>[VISUAL — WIDE SHOT]</ScreenEffect>

                <Paragraph>
                  The three figures disappear into the shelter entrance. The heavy blast doors remain open. The white suitcase still visible on MC&apos;s bike in the foreground—forgotten for now, but not for long. Snow continues to fall peacefully.
                </Paragraph>

                <SubSection title="Audio">
                  <Paragraph>
                    • A mechanical whirring sound begins to build<br/>
                    • High-pitched drone motors humming
                  </Paragraph>
                </SubSection>

                <Paragraph>
                  Camera tilts up toward the grey, snow-filled sky. Dark shapes emerge from the shelter&apos;s upper launch bay. DRONES—dozens of them. They rise into the air in a precise CUBIC PATTERN formation.
                </Paragraph>

                <SubSection title="Drone Formation">
                  <Paragraph>
                    The drones arrange themselves into a perfect 3D grid/cube shape. Sleek, black reconnaissance units with blue indicator lights. They hover for a moment, synchronized perfectly. Their formation is both beautiful and ominous.
                  </Paragraph>
                </SubSection>

                <SubSection title="Audio">
                  <Paragraph>
                    • The synchronized humming creates an almost musical tone<br/>
                    • Wind whistling through the formation<br/>
                    • Distant emergency sirens from City-1
                  </Paragraph>
                </SubSection>

                <Paragraph>
                  The cubic formation of drones begins moving. They fly toward the horizon—toward City-1. Camera follows them from behind, tracking their movement. The destroyed city comes into view in the distance. Smoke rising, fires still burning, buildings collapsed.
                </Paragraph>

                <SubSection title="Split Focus">
                  <Paragraph>
                    • Foreground: The organized, precise drone formation<br/>
                    • Background: The chaotic destruction of City-1<br/>
                    • The contrast is stark—order versus chaos, technology versus devastation
                  </Paragraph>
                </SubSection>

                <InfoBox>
                  <InfoRow label='Music Cue' value='"The Aftermath" — Epic, Melancholic Orchestral' />
                  <InfoRow label="Style" value="Slow strings, building tension, a sense of mystery and foreboding" />
                </InfoBox>

                <Paragraph>
                  Camera pulls back further. The drones become smaller as they approach City-1. City-A behind them—intact, safe, glowing with lights. City-1 ahead—broken, burning, dark. The bridge connecting them visible in the middle. Snow falling across the entire landscape.
                </Paragraph>

                <Paragraph>
                  The drones enter the smoke of City-1. Their blue lights disappear into the darkness. The camera holds on the burning city for a long beat. Snow continues to fall. Silence except for wind and distant crackling of fires. A moment of contemplation before the fade.
                </Paragraph>

                <ScreenEffect>[FADE TO BLACK]</ScreenEffect>

                <div className="text-center text-2xl font-bold text-ice-100 my-12">
                  SCENE 2 - PART 1: COMPLETE
                </div>
              </Section>

              {/* Technical Notes */}
              <Section id="technical" title="Technical Notes">
                <SubSection title="Gameplay Elements">
                  <Paragraph>
                    • <strong>QTE (Optional):</strong> Standing up sequence (MASH A/X to stand)<br/>
                    • <strong>Driving Sequence:</strong> Can be fully cinematic OR semi-playable (player controls bike through waypoints)<br/>
                    • <strong>Exploration Option:</strong> Allow player to stop and examine destroyed city (optional dialogue/world-building)<br/>
                    • <strong>Player Choice:</strong> Cat rescue decision from previous scene affects dialogue with the family at shelter
                  </Paragraph>
                  <Paragraph className="pl-6">
                    - If saved: MC can reassure the family, gains respect<br/>
                    - If not saved: MC lies and tries to leave quickly, mother becomes suspicious
                  </Paragraph>
                </SubSection>

                <SubSection title="Music Suggestions">
                  <Paragraph>
                    • <strong>&quot;Frozen Requiem&quot;</strong> — Epic emotional orchestral (riding through ruins)<br/>
                    • <strong>&quot;Bridge of Hope&quot;</strong> — Lighter, hopeful undertone (crossing to City-A)<br/>
                    • <strong>&quot;Mother&apos;s Tears&quot;</strong> — Piano-driven emotional piece (confrontation/slap scene)<br/>
                    • <strong>&quot;The Aftermath&quot;</strong> — Epic, melancholic orchestral (drone deployment finale)
                  </Paragraph>
                </SubSection>

                <SubSection title="Key Props">
                  <Paragraph>
                    1. <strong>White Metallic Suitcase</strong> — Mysterious, warm, locked, has faint blue glow (central mystery)<br/>
                    2. <strong>MC&apos;s Bike</strong> — Navigation system, durable, slightly damaged, parked outside shelter<br/>
                    3. <strong>Reconnaissance Drones</strong> — Sleek, black units with blue indicator lights, cubic formation<br/>
                    4. <strong>Robot Assistant</strong> — Humanoid security/analysis unit with tablet display
                  </Paragraph>
                </SubSection>

                <SubSection title="Key Characters Introduced">
                  <Paragraph>
                    • <strong>MC&apos;s Mother</strong> — Emotional, protective, alternates between anger and relief<br/>
                    • <strong>MC&apos;s Father</strong> — Emergency coordinator/shelter supervisor, authoritative but caring, wears official uniform<br/>
                    • <strong>Family with Daughter</strong> — Lost their cat &quot;Mittens&quot; in City-1, provides emotional depth<br/>
                    • <strong>Robot Assistant</strong> — Provides status reports, deploys drones
                  </Paragraph>
                </SubSection>

                <SubSection title="Character Emotions (Progression)">
                  <Paragraph>
                    • <strong>MC:</strong> Confusion → Determination → Guilt → Sarcasm → Relief → Exhaustion<br/>
                    • <strong>Mother:</strong> Fear → Anger → Nagging → Reluctant Acceptance → Relief<br/>
                    • <strong>Father:</strong> Professional Authority → Paternal Relief → Protectiveness
                  </Paragraph>
                </SubSection>

                <SubSection title="Cinematography Notes">
                  <Paragraph>
                    • <strong>Slap Scene:</strong> Use slow motion for impact, audio drop-out technique, close-ups on faces<br/>
                    • <strong>Family Walking Inside:</strong> Three-person unity shot (father-MC-mother connected)<br/>
                    • <strong>Drone Deployment:</strong> Start with mechanical sounds, build to musical tone, tracking shot following cubic formation<br/>
                    • <strong>Final Shot:</strong> Wide establishing shot showing both cities, bridge, and drones disappearing into smoke<br/>
                    • <strong>Color Palette:</strong> Cold blues and whites (snow), warm oranges (fires), stark contrast between cities
                  </Paragraph>
                </SubSection>

                <SubSection title="Pacing Notes">
                  <InfoBox>
                    <InfoRow label="Total Scene Length" value="Approximately 12-15 minutes" />
                  </InfoBox>
                  <Paragraph className="mt-4">
                    <strong>Emotional Beats:</strong><br/>
                    1. Waking up (disorientation) — 2 min<br/>
                    2. Discovering suitcase (mystery) — 1 min<br/>
                    3. Second blast (urgency) — 30 sec<br/>
                    4. Riding through ruins (epic montage) — 3-4 min<br/>
                    5. Bridge crossing (transition) — 1 min<br/>
                    6. Shelter arrival & slap (confrontation) — 3-4 min<br/>
                    7. Father reunion & drone deployment (resolution/setup) — 2-3 min
                  </Paragraph>
                </SubSection>
              </Section>

              {/* Footer */}
              <div className="glass rounded-xl p-6 mt-12 text-center text-ice-400 text-sm">
                <p>Document Version: 1.0 • Game: ASEP</p>
                <p>Author: MANOJ TIWARI RAMCHANDRA</p>
                <p>Last Updated: 02/12/2025</p>
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

function QTEPrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      {children}
    </div>
  );
}
