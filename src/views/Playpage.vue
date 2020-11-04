<template>
  <div class="playpage">
    <div id="Audio">
      <audio ref="mmAudio" controls></audio>
      <button @click="prev"></button>
      <button @click="play"></button>
      <button @click="next"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      list: [

            ]}
          },
    computed: {
            src() {
              return this.list[this.index] // 当前播放歌曲
            }
          },
    methods: {
            prev() {//上一曲
					let index = this.index - 1;
					if (index < 0) {
						index = this.list.length - 1
					}
					this.index = index;
					this.$nextTick(() => this.$refs.mmAudio.play())
				},
				play() {//暂停/播放
					this.$nextTick(() => this.$refs.mmAudio.paused ? this.$refs.mmAudio.play() : this.$refs.mmAudio.pause())
				},
				next() {//下一曲
					let index = this.index + 1;
					if (index === this.list.length) {
						index = 0
					}
					this.index = index;
					this.$nextTick(() => this.$refs.mmAudio.play())
				}
			}
		}

</script>

<style>
</style>