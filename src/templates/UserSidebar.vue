<template>
  <div>
    <!-- Sidebar -->
    <ul
      class="navbar-nav bg-gradient-primary sidebar sticky-top sidebar-dark accordion"
      id="accordionSidebar"
    >
      <!-- Sidebar - Brand -->
      <router-link
        class="sidebar-brand d-flex align-items-center justify-content-center"
        :to="{ name: 'home' }"
      >
        <div class="sidebar-brand-icon">
          <i class="fas fa-map-marker-alt"></i>
        </div>
        <div class="sidebar-brand-text mx-3">Karani</div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'userHome' }">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </router-link>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Interface</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <i class="fas fa-fw fa-user"></i>
          <span>Owner Information</span>
        </a>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link :to="{ name: 'keySubmission' }" class="collapse-item"
              >Public Key Submission
            </router-link>
            <router-link class="collapse-item" :to="{ name: 'viewUserDetails' }"
              >View Details</router-link
            >
            <router-link class="collapse-item" :to="{ name: 'changeWitness' }"
              >Change Witness</router-link
            >
            <router-link class="collapse-item" :to="{ name: 'changeKey' }"
              >Change Key</router-link
            >
          </div>
        </div>
      </li>
      <!-- Nav Item - Utilities Collapse Menu -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <i class="fas fa-fw fa-search"></i>
          <span>Land Search</span>
        </a>
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link class="collapse-item" :to="{ name: 'userTitleSearch' }"
              >Submit Search</router-link
            >
            <router-link
              class="collapse-item"
              :to="{ name: 'userSearchResults' }"
              >Search Results</router-link
            >
          </div>
        </div>
      </li>
      <!-- Nav Item - Transefers Collapse Menu -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTransefers"
          aria-expanded="true"
          aria-controls="collapseTransefers"
        >
          <i class="fas fa-fw fa-exchange-alt"></i>
          <span>Land Transfer</span>
        </a>
        <div
          id="collapseTransefers"
          class="collapse"
          aria-labelledby="headingTransefers"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link class="collapse-item" :to="{ name: 'userTransfer' }"
              >Submit Tranfer</router-link
            >
            <router-link class="collapse-item" :to="{ name: 'transferResults' }"
              >My Transfers</router-link
            >
          </div>
        </div>
      </li>
      <!-- Nav Item - Subs Collapse Menu -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseSubs"
          aria-expanded="true"
          aria-controls="collapseSubs"
        >
          <i class="fas fa-fw fa-cut"></i>
          <span>Land Subdvision</span>
        </a>
        <div
          id="collapseSubs"
          class="collapse"
          aria-labelledby="headingTransefers"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link class="collapse-item" :to="{ name: 'titleSubdivide' }"
              >Submit Plan</router-link
            >
            <router-link
              class="collapse-item"
              :to="{ name: 'subdivideResults' }"
              >My Subdivisions</router-link
            >
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider" />

      <!-- Heading -->
      <div class="sidebar-heading">Blocks</div>

      <!-- Nav Item - Pages Collapse Menu -->
      <li class="nav-item active">
        <a
          class="nav-link"
          href="#"
          data-toggle="collapse"
          data-target="#collapsePages"
          aria-expanded="true"
          aria-controls="collapsePages"
        >
          <i class="fas fa-fw fa-link"></i>
          <span>Blockchain</span>
        </a>
        <div
          id="collapsePages"
          class="collapse show"
          aria-labelledby="headingPages"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link class="collapse-item" :to="{ name: 'blockSearch' }"
              >Search</router-link
            >
          </div>
        </div>
      </li>

      <!-- Divider -->
      <hr class="sidebar-divider d-none d-md-block" />

      <!-- Sidebar Toggler (Sidebar) -->
      <div class="text-center d-none d-md-inline">
        <button class="rounded-circle border-0" id="sidebarToggle"></button>
      </div>
    </ul>
    <!-- End of Sidebar -->
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
