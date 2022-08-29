import Vue from "vue"
import Router from "vue-router"

//templates
import Portal from "./templates/Portal"
import Accounts from "./templates/Accounts"

//user/owner routes
import KeySubmission from "./views/user/KeySubmission"
import UserHome from "./views/user/UserHome"
import AdminHome from "./views/user/AdminHome"
import Home from "./views/Home.vue"
import ViewUserDetails from "./views/user/ViewUserDetails.vue"
//help
import UserHelp from "./views/help/UserHelp.vue"

//search routes
import UserTitleSearch from "./views/user/UserTitleSearch.vue"
import UserSearchResults from "./views/user/UserSearchResults.vue"
import ViewSearchResult from "./views/user/ViewSearchResult.vue"
//witeness
import WitnessAdd from "./views/witness/WitnessAdd.vue"
import WitnessSearch from "./views/witness/WitnessSearch.vue"
import PeerAdd from "./views/peer/PeerAdd.vue"
//titles
import TitleAdd from "./views/title/TitleAdd.vue"
import TitleSearch from "./views/title/TitleSearch.vue"
//subdivide routers
import TitleSubdivide from "./views/subdivide/TitleSubdivide.vue"
import SubdivideResults from "./views/subdivide/SubdivideResults.vue"
import ViewSubdivision from "./views/subdivide/ViewSubdivision.vue"
import BoardSubdivide from "./views/subdivide/BoardSubdivide.vue"
import RegistrarSubdivide from "./views/subdivide/RegistrarSubdivide.vue"
//transfer routes
import UserTransfer from "./views/transfer/UserTransfer.vue"
import TransferResults from "./views/transfer/TransferResults.vue"
import BoardTransfer from "./views/transfer/BoardTransfer.vue"
import RegistrarTransfer from "./views/transfer/RegistrarTransfer.vue"
//owners
import ChangeWitness from './views/owner/ChangeWitness'
import ChangeKey from './views/owner/ChangeKey'
import OwnerAdd from "./views/owner/OwnerAdd.vue"
import OwnerSearch from "./views/owner/OwnerSearch.vue"
import KeyReference from "./views/owner/KeyReference.vue"
//blocks
import BlockConfirmation from "./views/block/BlockConfirmation.vue"
import BlockRejected from "./views/block/BlockRejected.vue"
import BlockSearch from "./views/block/BlockSearch.vue"
//accounts
import Signup from "./views/accounts/Signup"
import Login from "./views/accounts/Login"


Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/",
      component: Accounts,
      children: [{
        path: "/login",
        name: "login",
        component: Login
      },
      {
        path: "/signup",
        name: "signup",
        component: Signup
      },]
    },
    //help paths
    {
      path: "/help/user",
      name: "userHelp",
      component: UserHelp,

    },
    //civilian admin routes
    {
      path: "/",
      component: Portal,
      children: [{
        path: "user/titleSearch",
        name: "userTitleSearch",
        component: UserTitleSearch
      },
      {
        path: "user/userSearchResults",
        name: "userSearchResults",
        component: UserSearchResults
      },
      {
        path: "user/viewSearchResult/:id",
        name: "viewSearchResult",
        component: ViewSearchResult
      },
      {
        path: "user/keySubmission",
        name: "keySubmission",
        component: KeySubmission
      }, {
        path: "user/home",
        name: "userHome",
        component: UserHome
      }, {
        path: "user/changeWitness",
        name: "changeWitness",
        component: ChangeWitness
      },
      {
        path: "user/viewUserDetails",
        name: "viewUserDetails",
        component: ViewUserDetails
      },
      {
        path: "user/changeKey",
        name: "changeKey",
        component: ChangeKey
      },
      //admin routes
      {
        path: "/witness/add",
        name: "witnessAdd",
        component: WitnessAdd
      },
      {
        path: "/witness/search",
        name: "witnessSearch",
        component: WitnessSearch
      }, {
        path: "/admin/home",
        name: "adminHome",
        component: AdminHome
      },
      {
        path: "/peer/add",
        name: "peerAdd",
        component: PeerAdd
      },
      {
        path: "/owner/add/:refNum",
        name: "ownerAdd",
        component: OwnerAdd
      },

      {
        path: "/owner/keyReference",
        name: "keyReference",
        component: KeyReference
      },

      {
        path: "/title/add",
        name: "titleAdd",
        component: TitleAdd
      },
      {
        path: "/title/transferResults",
        name: "transferResults",
        component: TransferResults
      },
      {
        path: "/title/boardTransfer",
        name: "boardTransfer",
        component: BoardTransfer
      },
      {
        path: "/title/registrarTransfer",
        name: "registrarTransfer",
        component: RegistrarTransfer
      },
      {
        path: "/subdivide/submitPlan",
        name: "titleSubdivide",
        component: TitleSubdivide
      },
      {
        path: "/subdivide/registrarSubdivide",
        name: "registrarSubdivide",
        component: RegistrarSubdivide
      },
      {
        path: "/subdivide/boardSubdivide",
        name: "boardSubdivide",
        component: BoardSubdivide
      },
      {
        path: "/subdivide/subdivideResults",
        name: "subdivideResults",
        component: SubdivideResults
      },
      {
        path: "/subdivide/viewSubdivision/:refNum",
        name: "viewSubdivision",
        component: ViewSubdivision
      },
      {
        path: "/title/userTranfer",
        name: "userTransfer",
        component: UserTransfer
      },
      {
        path: "/title/search",
        name: "titleSearch",
        component: TitleSearch
      },
      {
        path: "/owner/search",
        name: "ownerSearch",
        component: OwnerSearch
      },
      {
        path: "/block/confirmation/:mixedId",
        name: "blockConfirmation",
        component: BlockConfirmation
      },
      {
        path: "/block/rejected/:mixedId",
        name: "blockRejected",
        component: BlockRejected
      },
      {
        path: "/block/search/:query?",
        name: "blockSearch",
        component: BlockSearch
      }]
    },

  ]
})
