#include "cbase.h"
#include "c_skeleton_player.h"

LINK_ENTITY_TO_CLASS( player, C_SkeletonPlayer );

IMPLEMENT_CLIENTCLASS_DT(C_SkeletonPlayer,DT_SkeletonPlayer,CSkeletonPlayer)
END_RECV_TABLE()