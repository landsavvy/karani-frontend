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
        <div class="sidebar-brand-text mx-3">Karani Registrar</div>
      </router-link>

      <!-- Divider -->
      <hr class="sidebar-divider my-0" />

      <!-- Nav Item - Dashboard -->
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'adminHome' }">
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
          <i class="fas fa-fw fa-users"></i>
          <span>Owners</span>
        </a>
        <div
          id="collapseTwo"
          class="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link :to="{ name: 'keyReference' }" class="collapse-item"
              >Key Reference</router-link
            >

            <router-link class="collapse-item" :to="{ name: 'ownerSearch' }"
              >Search</router-link
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
          <i class="fas fa-fw fa-eye"></i>
          <span>Witness</span>
        </a>
        <div
          id="collapseUtilities"
          class="collapse"
          aria-labelledby="headingUtilities"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link class="collapse-item" :to="{ name: 'witnessAdd' }"
              >Add</router-link
            >
            <a class="collapse-item" href="utilities-border.html">Search</a>
          </div>
        </div>
      </li>
      <!-- Nav Item - Titles Collapse Menu -->
      <li class="nav-item">
        <a
          class="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTitles"
          aria-expanded="true"
          aria-controls="collapseTitles"
        >
          <i class="fas fa-fw fa-file-contract"></i>
          <span>Titles</span>
        </a>
        <div
          id="collapseTitles"
          class="collapse"
          aria-labelledby="headingTitles"
          data-parent="#accordionSidebar"
        >
          <div class="bg-white py-2 collapse-inner rounded">
            <router-link class="collapse-item" :to="{ name: 'titleAdd' }"
              >Add</router-link
            >
            <router-link class="collapse-item" :to="{ name: 'titleSearch' }"
              >Search</router-link
            >
            <router-link
              class="collapse-item"
              :to="{ name: 'registrarSubdivide' }"
              >Subdivide</router-link
            >
            <router-link
              class="collapse-item"
              :to="{ name: 'registrarTransfer' }"
              >Transfer</router-link
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
            <router-link class="collapse-item" :to="{ name: 'peerAdd' }"
              >Add Peers</router-link
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
