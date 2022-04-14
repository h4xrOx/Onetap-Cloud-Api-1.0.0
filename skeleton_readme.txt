SDK SKELETON: A BARE-MINIMUM SOURCE ENGINE GAME
Version 2, 2011-8-27
http://developer.valvesoftware.com/wiki/SDK_Skeleton

This package should be extracted to a folder already containing the SDK
Source code (it won't overwrite anything). Open one of the .sln files with
Visual Studio to get started.

The compiled DLLs will appear in in \game\sdk_skeleton. Edit the projects'
Post-Build Event to redirect them to your mod's \bin folder. You will
also need to configure debugging.

== Player model ==

A simple player model is included. You will need to compile it with the
relevant engine branch before the skeleton can be run. Make your mod the
active project in the SDK launcher, then drag the QC file onto the
studiomdl.exe SDK tool.

== Source 2007 ==

There are at the time of writing errors in Valve's 2007 CPP files that
you must fix manually:

* http://developer.valvesoftware.com/wiki/Compiling_under_VS2005 (2005 ONLY; the
  "LNK2019 errors" fix has already been applied)
* http://developer.valvesoftware.com/wiki/Compiling_under_VS2008#Fix_debug_compilation (2008/2010 ONLY)
* http://developer.valvesoftware.com/wiki/Client_missing_DT_class_CWaterBullet

The 2007 projects reference vgui_video.cpp/h, which are no longer a part of the Source SDK. If you
don't have these files simply remove them from the client project.

== Alien Swarm ==

You will need to perform one fix to compile the Swarm projects (even if you are using VS2010):

* http://developer.valvesoftware.com/wiki/Compiling_under_VS2008#Fix_debug_compilation

The Swarm Skeleton code has the following gotchas:

* Players cannot move for three seconds after a new game starts. This is actually a deliberate
  restriction by Valve to ensure that players "pick up everything". Modify the start of
  CBasePlayer::PlayerRunCommand if it is a problem for your project.
* Since the game UI is now integrated deeply with the game there is no main menu in Skeleton,
  just the console. The lack of a GUI seems to be causing one of the engine's threads to hang
  when a game is not in progress, which might make the process completely unresponsive on
  single-core systems but is not a showstopper with multicore CPUs.
* Using net_fakelag as a listenserver host causes a range of issues. This is likely to be
  an engine problem. Fake lag works correctly on a local dedicated server, so test there instead.
* You will get a lot of console warnings when starting the game up due to Alien Swarm scripts
  trying to invoke code that no longer exists. They are harmless, but all the same you'll
  probably want to overwrite the offending scripts with blank text files.

== Multiplayer ==

Also included (for both engine branches) are CBaseNetworkedPlayer, CBaseNetworkedRagdoll
and CNetworkedPlayerMovement. These apply Valve's most current multiplayer player techniques
to CBasePlayer and CRagdoll.

They are not implemented by default. If you want to use them:

* Select the contents of the Skeleton/Multiplayer/ folder, go to properties, switch to
  All Configurations, and change "Excluded From Build" to "No". Do this for both projects.
* Exclude (or remove altogether) skeleton_gamemovement (Skeleton/Shared/) and
  skeleton_player (Skeleton/)
* Define CBaseNetworkedPlayer::m_PlayerAnimState in shared code.

2007 only: jumping will not work properly until you edit the PLAYERANIMEVENT_JUMP case in
CMultiplayerAnimState::DoAnimationEvent(). Replace RestartMainSequence() with
RestartGesture( GESTURE_SLOT_JUMP, ACT_MP_JUMP ). Depending on how you models are animated you
may also want to edit CMultiPlayerAnimState::HandleJumping(), particularly where it sets
the idealActivity to "jump". 

For more help:

* http://developer.valvesoftware.com/wiki/m_PlayerAnimState
* http://developer.valvesoftware.com/wiki/acttable_t

---

The SDK Skeleton was created for the Source SDK and Visual C++ Express 2005/2008/2010 by
Tom Edwards (contact@steamreview.org). It is distributed under the terms of the Apache License
2.0 <http://www.apache.org/licenses/LICENSE-2.0.html>.