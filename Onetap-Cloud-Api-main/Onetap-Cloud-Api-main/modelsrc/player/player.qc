$modelname "skeleton/player.mdl"
$cdmaterials "models"
$surfaceprop default

$body body "Player.smd"

######################
# Set up the ragdoll #
######################
$definemacro LooseJoint name \\
	$jointconstrain $name$ x limit -80.00 80.00 0.00 \\
	$jointconstrain $name$ y limit -80.00 80.00 0.00 \\
	$jointconstrain $name$ z limit -80.00 80.00 0.00 \\

$collisionjoints "Player_phys.smd" {
	$automass

	$LooseJoint "Leg_left"
	$LooseJoint "Leg_right"
	$LooseJoint "Neck"
	
}
$sequence RestPose "Player.smd" activity ACT_DIERAGDOLL 1 hidden

##################################
# Set up the walk and aim blends #
##################################
$pushd "anims"

$animation move_NW "move_NW.smd" loop fps 30  walkframe 20 LX LY
$animation move_N  "move_N.smd"  loop fps 30  walkframe 20 LX
$animation move_NE "move_NE.smd" loop fps 30  walkframe 20 LX LY
$animation move_E  "move_E.smd"  loop fps 30  walkframe 20 LY
$animation move_SE "move_SE.smd" loop fps 30  walkframe 20 LX LY
$animation move_S  "move_S.smd"  loop fps 30  walkframe 20 LX
$animation move_SW "move_SW.smd" loop fps 30  walkframe 20 LX LY
$animation move_W  "move_W.smd"  loop fps 30 walkframe 20 LY
$animation move_C "move_centre.smd" loop fps 30

$sequence walk {
	move_SW move_S move_SE
	move_W  move_C move_E
	move_NW move_N move_NE
	
	blendwidth 3
	blend move_y -1 1
	blend move_x -1 1
	
	activity ACT_MP_RUN 1
	activity ACT_IDLE 1
	
	addlayer look
}

$animation look_up "Look_up.smd" loop fps 1 subtract RestPose 0
$animation look_down "Look_down.smd" loop fps 1 subtract RestPose 0
$animation look_centre "../Player.smd" loop fps 1 subtract RestPose 0
$animation look_left "Look_left.smd" loop fps 1 subtract RestPose 0
$animation look_right "Look_right.smd" loop fps 1 subtract RestPose 0

$sequence look {
	look_down look_down look_down	
	look_left look_centre look_right
	look_up look_up look_up
	
	blendwidth 3
	blend body_yaw -45 45
	blend body_pitch -45 45
	
	delta
}

####################
# Other animations #
####################
$sequence jump "jump.smd" fps 40 activity ACT_MP_JUMP 1 addlayer look

$popd