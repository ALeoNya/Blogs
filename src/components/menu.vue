<script lang="ts" setup>
    import {ref , onMounted} from 'vue'



    onMounted(()=> {
        const menuBtn:any = document.getElementById('menuBtn')
        const menu:any = document.querySelector('.menu')
        const menuText = document.querySelectorAll('.menuText')
        menuBtn.addEventListener('click', () => {
            // console.log('hiiiii')
            menu.classList.toggle('open')
            menuText.forEach(function (text, index) {
                setTimeout(() => {
                    text.classList.toggle('open2')
                }, index * 50)
            })
        })
    }) 

</script>

<template>
<nav class="menu">
    <div class="actionsBar">
    <div>
        <button id="menuBtn" type="button"><i class="iconfont icon-hanbaocaidan"></i></button>
        <!-- <h3 class="menuText">ALeo</h3> -->
    </div>
    </div>
    <ul class="optionsBar">
    <li class="menuItem">
        <!-- 返回首页 -->
        <el-tooltip
        class="box-item"
        effect="dark"
        content="首页"
        placement="right"
        >
        <a href="/nwcpnl" class="menuOption">
            <i class="iconfont icon-shouye"></i>
        </a>
        </el-tooltip>
    </li>
    <li class="menuBreak">
        <hr>
    </li>
    <li class="menuItem">
        <el-tooltip
        class="box-item"
        effect="dark"
        content="Twitter"
        placement="right"
        >
        <button itype="button" class="menuOption" onclick="window.open('https://twitter.com/ParifalH57168')">
            <i class="iconfont icon-twitter"></i>
            <h5 class="menuText">推特</h5>
        </button>
        </el-tooltip>
    </li>
    <li class="menuItem">
        <el-tooltip
        class="box-item"
        effect="dark"
        content="Github"
        placement="right"
        >
        <button itype="button" class="menuOption" onclick="window.open('https://github.com/ALeoNya')" >
            <i class="iconfont icon-github"></i>
            <h5 class="menuText">Github</h5>
        </button>
        </el-tooltip>
    </li>
    <li class="menuItem">
        <el-tooltip
        class="box-item"
        effect="dark"
        content="Telegram"
        placement="right"
        >
        <button itype="button" class="menuOption" onclick="window.open('https://web.telegram.org/k/')">
            <i class="iconfont icon-telegram"></i>
            <h5 class="menuText">Telegram</h5>
        </button>
        </el-tooltip>
    </li>
    <li class="menuItem">
        <el-tooltip
        class="box-item"
        effect="dark"
        content="后台"
        placement="right"
        >
        <button type="button" class="menuOption">
            <i class="iconfont icon-24gl-gear"></i>
            <h5 class="menuText">管理</h5>
        </button>
        </el-tooltip>
    </li>
    <li class="menuItem">
        <el-tooltip
        class="box-item"
        effect="dark"
        content="财务"
        placement="right"
        >
        <button type="button" class="menuOption" onclick="window.open('https://web.telegram.org/k/')">
            <i class="iconfont icon-jiaoyijilu"></i>
            <h5 class="menuText">财管</h5>
        </button>
        </el-tooltip>
    </li>
    </ul>
    <!-- <div class="about" id="about">
    </div> -->
    <!-- <div class="menuUser">
    <a href="#">
        <div>
            <img src="../image/hiiro.jpg" alt="">
        </div>
        <h5 class="Username menuText">Kawayi</h5>
        <p class="menuText"><i class="iconfont icon-youjiantou"></i></p>
    </a>
    </div>
    <div class="themeBar">
        <div>
            <button type="button"><i class="iconfont icon-tuichu"></i></button>
        </div>
    </div> -->
</nav>
</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    overflow: auto;
    background-color: #D1D4DC;
}

.iconfont {
    font-size: 20px;
}

.menu {
    position:fixed;
    /* position: absolute; */
    width: 60px;
    height: 600px;
    /* background-color: #302E80; */
    background-color: wi;
    /* z-index: 2; */
    top: 0;
    bottom: 0;
    left: 10px;
    margin: auto;
    border-radius: 0.8rem;
    transition: 0.3s ease 0.15s;
    font-family: sans-serif;
}

.menu a {
    text-decoration: none;
}

.menu .actionsBar {
    width: 100%;
    height: 10%;
    padding: 0.5rem;
    overflow: hidden;
}

.menu .actionsBar div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.5rem;
    transition: 0.3s ease;
}

.menu .actionsBar div button {
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: #8A7AE8;
    width: 45px;
    height: 45px;
    transition: 0.3s ease;
    font-size: 1rem;
}

.menu .actionsBar div button:hover {
    background-color: #302E80;
    color: #F19FA3;

}

.menu .actionsBar div h3 {
    width: calc(100% - 45px);
    text-align: center;
}

.menu .optionsBar {
    overflow: hidden;
    display: flex;
    width: 100%;
    height: 60%;
    padding: 0 0.5rem;
    align-items: center;
    flex-direction: column;
}

.menu .optionsBar .menuItem {
    width: 100%;
    height: 45px;
    margin: 0.3rem;
}

.menu .optionsBar .menuItem .menuOption {
    font-size: 1rem;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.5rem;
    transition: 0.3s ease;
}

.menu .optionsBar .menuItem .menuOption:hover {
    background-color: #4236C7;
    color: #F19FA3;

}
.menu .optionsBar .menuItem .menuOption:hover i,
.menu .optionsBar .menuItem .menuOption:hover h5{ 
    color: #F19FA3;

}
.menu .optionsBar .menuItem .menuOption i {
    width: 45px;
    text-align: center;
    color: #8A7AE8;
}

.menu .optionsBar .menuItem .menuOption h5 {
    width: calc(100% - 45px);
}

.menuText {
    color: #8A7AE8;
    transform: translateX(-250px);
    opacity: 0;
    transition: transform 0.3s ease 0.1s;
}

.menu .about {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem;
    flex-direction: column;
    font-family: sans-serif;
    opacity: 0;
    white-space: nowrap;
    transition: 0.3s ease 0.15s;
}

.menu.open {
    /* width: 240px; */
    /* background-color: #F19FA3; */
    background-color: white;
    width: 200px;
    height: 500px;
}

.menuText.open2 {
    opacity: 1;
    transform: translateX(0);
    margin-left: 0;
    /* width: 200px; */
}

.menu .menuBreak {
    width: 100%;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.menu .menuBreak hr {
    width: 70%;
    height: 3px;
    background-color: #8A7AE8;
    border: none;
    border-radius: 5px;
}

.menu .themeBar {
    overflow: hidden;
    width: 100%;
    height: 10%;
    padding: 0.5rem;
}

.menu .themeBar div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 0.5rem;
    transition: 0.3s ease;
}

.menu .themeBar div button {
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    color: #8A7AE8;
    width: 100%;
    height: 45px;
    transition: 0.3s ease;
    font-size: 1rem;
}

.menu .themeBar div button:hover {
    background-color: #364152; 
    color: #F19FA3;

}

.menu .menuUser {
    width: 100%;
    height: 10%;
}

.menu .menuUser a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    padding: 0.5rem;
    position: relative;
}

.menu .menuUser a div {
    width: 45px;
    height: 45px;
    position: relative;
    border-radius: 0.5rem;
}

.menu .menuUser a div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
}

.menu .menuUser a .Username {
    width: calc(70% - 45px);
}

.menu .menuUser a p {
    width: calc(30% - 45px);
}

.menu .menuUser a:hover p {
    animation: animArrow 0.3s ease 2;
    color: #F19FA3;

}

@keyframes animArrow {
    0% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(5px);
    }

    100% {
        transform: translateX(0);
    }
}

.menu .menuUser .userInfo {
    position: absolute;
    width: 20rem;
    height: 18rem;
    opacity: 0;
    pointer-events: none;
    top: 34%;
    left: 1.5rem;
    transition: 0.3s ease;
    transform: scale(0);
    transform-origin: bottom left;
}

.menu .menuUser:hover .userInfo {
    pointer-events: all;
    opacity: 1;
    transform: scale(1);
    color: #F19FA3;

}
/* h5 {
    max-width: 50px;
    margin-left: 1px;
} */
</style>