<template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="借款额度">
        <el-input-number
          v-model="integralGrade.borrowAmount"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="积分区间开始">
        <el-input-number
          v-model="integralGrade.integralStart"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="积分区间结束">
        <el-input-number
          v-model="integralGrade.integralEnd"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button
          :disabled="saveBthDisabled"
          type="primary"
          @click="saveOrUpdate()"
        >
          保存
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import integralGradeApi from '@/api/core/integral-grade'

export default {
  data() {
    return {
      saveBthDisabled: false,
      integralGrade: {}, //积分等级对象
    }
  },

  created() {
    if (this.$route.params.id) {
      this.fetchById(this.$route.params.id)
    }
  },

  methods: {
    fetchById(id) {
      integralGradeApi.getById(id).then((response) => {
        this.integralGrade = response.data.record
      })
    },

    saveOrUpdate() {
      this.saveBthDisabled = true
      if (!this.integralGrade.id) {
        this.saveDate()
      } else {
        this.updateDate()
      }
    },
    saveDate() {
      integralGradeApi.save(this.integralGrade).then((response) => {
        this.$message.success(response.message)
        this.$router.push('/core/integral-grade/list')
      })
    },

    updateDate() {
      integralGradeApi.update(this.integralGrade).then((response) => {
        this.$message.success(response.message)
        this.$router.push('/core/integral-grade/list')
      })
    },
  },
}
</script>
<style scoped>
</style>
