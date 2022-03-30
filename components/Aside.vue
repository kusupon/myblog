<template>
  <aside>
    <div class="introduction">
      <h2 class="name">profile</h2>
      <p>名前:kusupon</p>
      <p>N高等学校 6期生 1年</p>
    </div>
    <div class="SNS">
      <div class="snsBtn" ontouchstart="">
        <a
          href="https://twitter.com/n6kspn"
          target="_blank"
          rel="noopener noreferrer"
          class="twitter"
        >
          <font-awesome-icon icon="fa-brands fa-twitter" />
          Twitter
        </a>
      </div>
      <div class="snsBtn" ontouchstart="">
        <a
          href="https://www.instagram.com/kusupon_n6"
          target="_blank"
          rel="noopener noreferrer"
          class="instagram"
        >
          <font-awesome-icon icon="fa-brands fa-instagram" />
          Instagram
        </a>
      </div>
      <div class="snsBtn" ontouchstart="">
        <a
          href="https://github.com/kusupon"
          target="_blank"
          rel="noopener noreferrer"
          class="github"
        >
          <font-awesome-icon icon="fa-brands fa-github" />
          GitHub
        </a>
      </div>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
@import '/assets/scss/main.scss';
aside {
  margin-left: 10px;
  text-align: center;
  width: 25%;
  .rogo {
    margin-top: 30px;
    img {
      border-radius: 15px;
    }
  }
  h2 {
    margin-top: 30px;
  }
  @include mobile {
    border-top: 2px solid #000;
    width: 100%;
    
  }
  
}

.SNS {
  display: block;
  width: 100%;
  margin: 0 auto;
}

.snsBtn {
  text-align: center;
  width: 100%;
  margin-top: 8px;
  margin-left: 8px;
}

.twitter:hover {
  transform: scale(1.07);
}

.instagram:hover {
  transform: scale(1.07);
}

.instagram2:hover {
  transform: scale(1.07);
}

.github,
.twitter,
.instagram,
.instagram2 {
  display: block;
  transition: all 0.3s;
  text-decoration: none;
  color: rgb(0, 0, 0);
  padding: 10px 0;
  background-color: #ffffff;
  border-radius: 5px;
  border: 1px solid rgb(169, 169, 169);
}

.github:hover {
  transform: scale(1.07);
}

@media (max-width: 600px) {
  .SNS {
    flex-wrap: wrap;
    width: 90%;
  }

  .snsBtn {
    width: 100%;
  }
}

.introduction {
  margin: 20px;
}
</style>