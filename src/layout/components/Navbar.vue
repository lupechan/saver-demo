<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->

    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <div style="margin:0 100px 0 30px;width=180px;height:30px;">
      <img src="@/assets/map_images/logo.png" alt="" style="flex: none;max-height:100%;max-width:100%;">
    </div>
    <el-menu
      :default-active="activeIndex"
      background-color="#12123A"
      text-color="#FFFFFF77"
      active-text-color="#FFF"
      mode="horizontal"
      style="width:0;flex:auto;"
      @select="handleSelect"
    >
      <!-- <img src="@/assets/map_images/logo.png" alt=""> -->
      <el-menu-item index="entry-exit">海外出境信息</el-menu-item>
      <el-menu-item index="overview">海外救援情况总览</el-menu-item>
      <el-menu-item index="tracing">报警救援全程跟踪</el-menu-item>
      <el-menu-item index="records">报警日志</el-menu-item>
      <el-menu-item index="history">救援历史记录</el-menu-item>
    </el-menu>

    <div class="right-menu">
      <!-- <el-dropdown class="avatar-container" trigger="click"> -->
      <div class="avatar-container">
        <div class="avatar-wrapper">
          <!-- <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> -->
          <img src="@/assets/map_images/avatar.png" class="user-avatar">
          <!-- <i class="el-icon-caret-bottom" /> -->
          <span>管理员</span>
        </div>
      </div>
        <!-- <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link to="/">
            <el-dropdown-item>
              Home
            </el-dropdown-item>
          </router-link>
          <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
            <el-dropdown-item>Github</el-dropdown-item>
          </a>
          <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
            <el-dropdown-item>Docs</el-dropdown-item>
          </a>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu> -->
      <!-- </el-dropdown> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Breadcrumb,
    // Hamburger
  },
  data() {
    return {
      activeIndex: this.$route.meta.activeMenu
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  watch: {
    $route(val) {
      this.activeIndex = val.meta.activeMenu
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    handleSelect(val) {
      let to = ''
      switch (val) {
        case 'entry-exit': to = '/entry-exit'; break
        case 'overview': to = '/overview'; break
        case 'tracing': to = '/tracing'; break
        case 'records': to = '/records'; break
        case 'history': to = '/history'; break
      }
      this.$router.push(to)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #12123A;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .el-menu {
    border-color: transparent;
  }

  .el-menu-item {
    height: 60px;
    line-height: 60px;
    padding: 0;
    margin-right: 60px;
    border-width: 3px;
    font-weight: 500;
    &.is-active {
      border-color: #2762FC !important;
    }
  }

  // .hamburger-container {
  //   line-height: 46px;
  //   height: 100%;
  //   float: left;
  //   cursor: pointer;
  //   transition: background .3s;
  //   -webkit-tap-highlight-color:transparent;

  //   &:hover {
  //     background: rgba(0, 0, 0, .025)
  //   }
  // }

  // .breadcrumb-container {
  //   float: left;
  // }

  .right-menu {
    flex: 0 0 100px;
    height: 100%;
    line-height: 60px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      height: 100%;
      margin-right: 30px;

      .avatar-wrapper {
        display: flex;
        align-items: center;
        width: 100px;
        height: 100%;
        // margin-top: 10px;
        position: relative;

        & > span {
          font-size: 14px;
          margin-left: 8px;
        }

        .user-avatar {
          cursor: pointer;
          width: 30px;
          height: 30px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
