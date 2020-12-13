<template>
  <v-app>
    <v-row justify="center">
      <v-col cols="12"
             lg="4"
             md="6"
             sm="8"
      >

        <v-card
          class="d-flex flex-column text-center pa-0 ma-0"
        >
          <v-container class="grey pa-0 ma-0">
            <p class="red--text darken-4 title text-center">Вентилятор</p>

            <v-container class="d-inline-flex child-flex align-center indigo--text darken-4 pa-0 ma-0">
              <p>Мощность</p>

              <v-text-field
                height="10px"
                outlined
                placeholder="0.0"
                v-model.number="power"
                @blur="modification"
              ></v-text-field>

              <p>кВт</p>
            </v-container>

            <v-container class="d-inline-flex child-flex align-center pa-0 ma-0">
              <p>Управление</p>

              <div class="align-content-center">
                <v-radio-group
                  @blur="manage"
                  class="justify-center"
                  column
                  mandatory
                  v-model="manage"
                >
                  <v-radio
                    label="Прямой запуск"
                    value="adjectives"
                    @click="modification"
                  ></v-radio>
                  <v-radio
                    label="Преобразователь частоты"
                    value="converter"
                    @click="modification"
                  ></v-radio>
                </v-radio-group>
              </div>

            </v-container>

          </v-container>

          <v-container>
            <p class="red--text darken-4 title pa-0 ma-0">Общие</p>
            <v-container class="d-inline-flex flex-column align-center pa-0 ma-0">
              <v-container class="d-inline-flex child-flex align-center  justify-start pa-0 ma-0">
                <p>Корпус</p>

                <div class="align-content-center">
                  <v-radio-group
                    class="justify-center"
                    column
                    mandatory
                    v-model="corpus">
                    <v-radio
                      label="Пластик"
                      value="plastic"
                      @click="modification"
                    ></v-radio>
                    <v-radio
                      label="Метал"
                      value="metal"
                      @click="modification"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </v-container>

              <v-container class="d-inline-flex child-flex align-center pa-0 ma-0" fluid>
                <p>Доп.опции</p>
                <div class="align-content-center">
                  <v-checkbox
                    label="Сигнал Пожар"
                    v-model="selected"
                    value="signal"
                    @click="modification"
                  ></v-checkbox>

                  <v-checkbox
                    label="LED-индикация"
                    v-model="selected"
                    value="led"
                    @click="modification"
                  ></v-checkbox>

                  <v-checkbox
                    label="Диспетчеризация"
                    v-model="selected"
                    value="dispatching"
                    @click="modification"
                  ></v-checkbox>
                </div>

              </v-container>
            </v-container>
          </v-container>
        </v-card>

      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data () {
    return {
      power: null,
      manage: '',
      corpus: '',
      selected: []
    }
  },

  methods: {

    async modification () {
      if (typeof (this.power) === 'number') {
        await axios({
          method: 'post',
          url: 'http://localhost:3000/in',
          data: {
            power: this.power,
            manage: this.manage,
            corpus: this.corpus,
            selected: this.selected
          }
        }).then((response) => {
          console.log(response)
        }, (error) => {
          console.log(error)
        })
      } else if (this.power === null) {
        alert('Заполните поле \'Мощность\'')
      } else {
        alert('Поле может \'Мощность\' может содежрать только цифры')
      }
    }
  }
}
</script>

<style scoped>

</style>
