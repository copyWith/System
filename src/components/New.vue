<template>
  <div id="new">
    <div class="new_section_left">
      <div class="safety"></div>
      <div></div>
    </div>
    <div class="new_section_right"></div>
  </div>
</template>

<style>
  #new > div {
    float: left;
    overflow: hidden;
  }
  #new .new_section_left {
    width: 75%;
    margin-right: 1%;
  }
  #new .new_section_right {
    width: 24%;
  }
  #new > div > div {
    padding: 16px;
    border: 1px solid transparent;
    box-shadow: 0 1px 1px rgba(0,0,0,0.15);
    background-color: #fff;
    float: left;
    overflow: hidden;
    margin-bottom: 16px;
    margin-right: 16px;
  }
  #new > div > div:hover {
    border: 1px solid #00c1de;
    box-shadow: 0 0 20px rgba(0,198,226,.5);
  }
  #new  h1 {
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>