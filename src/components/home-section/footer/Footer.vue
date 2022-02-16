<template>
  <div class="footer">
    <div class="contact-us flex justify-between">
      <div class="social-media flex gap-6 items-center">
        <div class="social">
          <img src="@/assets/social-media/facebook.png" alt="" />
        </div>
        <div class="social">
          <img src="@/assets/social-media/twitter.png" alt="" />
        </div>
        <div class="social">
          <img src="@/assets/social-media/instagram.png" alt="" />
        </div>
        <div class="social">
          <img src="@/assets/social-media/youtube.png" alt="" />
        </div>
      </div>
      <div class="actions flex gap-6 items-center">
        <div class="action">Tentang Kami</div>
        <div class="action">Servis Kami</div>
        <div class="action">Kontak Kami</div>
        <div class="action">Kebijakan Privasi</div>
      </div>
    </div>
    <div class="copyright">
      Copyright ©2022 Unknown Team. All Right Reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 10px 0 0 0;
}

.contact-us {
  border-top: 1px solid rgb(129, 129, 129);
  padding: 32px 64px;
}

.copyright {
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #febb02;
  color: black;
}

.action {
  cursor: pointer;
}

.action:hover {
  border-bottom: 1px solid white;
  padding-bottom: 2px;
}
</style>
