<template>
  <main>
    <div class="rogo">
      <img
        src="/assets/img/IMG_3930.jpeg"
      />
    </div>
    <div class="introduction">
      <h2 class="name">プロフィール</h2>
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
  </main>
</template>

<style scoped>

main {
    text-align: center;
    width: 25%;
  float: right;
  margin-right: 5%;
}
main .rogo {
  margin-top: 30px;
}
main .rogo img {
  border-radius: 15px;
}

main h2 {
  margin-top: 30px;
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

.github,.twitter,.instagram,.instagram2 {
  display: block;
  transition: all 0.3s;
  text-decoration: none;
  color: rgb(0, 0, 0);
  padding: 10px 25px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.2);
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