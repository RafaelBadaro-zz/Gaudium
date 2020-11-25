<template>
  <div class="deck__circulo">
    <div v-if="loading" class="lds-ripple">
      <div></div>
      <div></div>
    </div>
    <div v-if="!loading" class="deck__grid">
      <div class="item cartas">
        <!--Paus-->
        <div v-if="isCarta('dois_paus')" class="card dois_paus">
          <div class="front">
            <div class="index">
              2
              <br />&clubs;
            </div>

            <div class="spotB1">&clubs;</div>
            <div class="spotB5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('tres_paus')" class="card tres_paus">
          <div class="front">
            <div class="index">
              3
              <br />&clubs;
            </div>

            <div class="spotB1">&clubs;</div>
            <div class="spotB3">&clubs;</div>
            <div class="spotB5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('quatro_paus')" class="card quatro_paus">
          <div class="front">
            <div class="index">
              4
              <br />&clubs;
            </div>
            <div class="spotA1">&clubs;</div>
            <div class="spotA5">&clubs;</div>
            <div class="spotC1">&clubs;</div>
            <div class="spotC5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('cinco_paus')" class="card cinco_paus">
          <div class="front">
            <div class="index">
              5
              <br />&clubs;
            </div>
            <div class="spotA1">&clubs;</div>
            <div class="spotA5">&clubs;</div>
            <div class="spotB3">&clubs;</div>
            <div class="spotC1">&clubs;</div>
            <div class="spotC5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('seis_paus')" class="card seis_paus">
          <div class="front">
            <div class="index">
              6
              <br />&clubs;
            </div>
            <div class="spotA1">&clubs;</div>
            <div class="spotA3">&clubs;</div>
            <div class="spotA5">&clubs;</div>
            <div class="spotC1">&clubs;</div>
            <div class="spotC3">&clubs;</div>
            <div class="spotC5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('sete_paus')" class="card sete_paus">
          <div class="front">
            <div class="index">
              7
              <br />&clubs;
            </div>
            <div class="spotA1">&clubs;</div>
            <div class="spotA3">&clubs;</div>
            <div class="spotA5">&clubs;</div>

            <div class="spotB2">&clubs;</div>

            <div class="spotC1">&clubs;</div>
            <div class="spotC3">&clubs;</div>
            <div class="spotC5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('oito_paus')" class="card oito_paus">
          <div class="front">
            <div class="index">
              8
              <br />&clubs;
            </div>
            <div class="spotA1">&clubs;</div>
            <div class="spotA3">&clubs;</div>
            <div class="spotA5">&clubs;</div>

            <div class="spotB2">&clubs;</div>
            <div class="spotB4">&clubs;</div>

            <div class="spotC1">&clubs;</div>
            <div class="spotC3">&clubs;</div>
            <div class="spotC5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('nove_paus')" class="card nove_paus">
          <div class="front">
            <div class="index">
              9
              <br />&clubs;
            </div>
            <div class="spotA1">&clubs;</div>
            <div class="spotA2">&clubs;</div>
            <div class="spotA4">&clubs;</div>
            <div class="spotA5">&clubs;</div>

            <div class="spotB3">&clubs;</div>

            <div class="spotC1">&clubs;</div>
            <div class="spotC2">&clubs;</div>
            <div class="spotC4">&clubs;</div>
            <div class="spotC5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('dez_paus')" class="card dez_paus">
          <div class="front">
            <div class="index">
              10
              <br />&clubs;
            </div>
            <div class="spotA1">&clubs;</div>
            <div class="spotA2">&clubs;</div>
            <div class="spotA4">&clubs;</div>
            <div class="spotA5">&clubs;</div>

            <div class="spotB2">&clubs;</div>
            <div class="spotB4">&clubs;</div>

            <div class="spotC1">&clubs;</div>
            <div class="spotC2">&clubs;</div>
            <div class="spotC4">&clubs;</div>
            <div class="spotC5">&clubs;</div>
          </div>
        </div>

        <div v-if="isCarta('jack_paus')" class="card jack_paus">
          <div class="front red">
            <div class="index">
              J
              <br />&diams;
            </div>
            <img class="face" src="../assets/jack.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('queen_paus')" class="card queen_paus">
          <div class="front red">
            <div class="index">
              Q
              <br />&diams;
            </div>
            <img class="face" src="../assets/queen.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('king_paus')" class="card king_paus">
          <div class="front red">
            <div class="index">
              K
              <br />&diams;
            </div>
            <img class="face" src="../assets/king.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('as_paus')" class="card as_paus">
          <div class="front">
            <div class="index">
              A
              <br />&clubs;
            </div>
            <div class="ace">&clubs;</div>
          </div>
        </div>

        <!--Espadas-->
        <div v-if="isCarta('dois_espadas')" class="card dois_espadas">
          <div class="front">
            <div class="index">
              2
              <br />&spades;
            </div>

            <div class="spotB1">&spades;</div>
            <div class="spotB5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('tres_espadas')" class="card tres_espadas">
          <div class="front">
            <div class="index">
              3
              <br />&spades;
            </div>

            <div class="spotB1">&spades;</div>
            <div class="spotB3">&spades;</div>
            <div class="spotB5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('quatro_espadas')" class="card quatro_espadas">
          <div class="front">
            <div class="index">
              4
              <br />&spades;
            </div>
            <div class="spotA1">&spades;</div>
            <div class="spotA5">&spades;</div>
            <div class="spotC1">&spades;</div>
            <div class="spotC5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('cinco_espadas')" class="card cinco_espadas">
          <div class="front">
            <div class="index">
              5
              <br />&spades;
            </div>
            <div class="spotA1">&spades;</div>
            <div class="spotA5">&spades;</div>
            <div class="spotB3">&spades;</div>
            <div class="spotC1">&spades;</div>
            <div class="spotC5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('seis_espadas')" class="card seis_espadas">
          <div class="front">
            <div class="index">
              6
              <br />&spades;
            </div>
            <div class="spotA1">&spades;</div>
            <div class="spotA3">&spades;</div>
            <div class="spotA5">&spades;</div>
            <div class="spotC1">&spades;</div>
            <div class="spotC3">&spades;</div>
            <div class="spotC5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('sete_espadas')" class="card sete_espadas">
          <div class="front">
            <div class="index">
              7
              <br />&spades;
            </div>
            <div class="spotA1">&spades;</div>
            <div class="spotA3">&spades;</div>
            <div class="spotA5">&spades;</div>

            <div class="spotB2">&spades;</div>

            <div class="spotC1">&spades;</div>
            <div class="spotC3">&spades;</div>
            <div class="spotC5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('oito_espadas')" class="card oito_espadas">
          <div class="front">
            <div class="index">
              8
              <br />&spades;
            </div>
            <div class="spotA1">&spades;</div>
            <div class="spotA3">&spades;</div>
            <div class="spotA5">&spades;</div>

            <div class="spotB2">&spades;</div>
            <div class="spotB4">&spades;</div>

            <div class="spotC1">&spades;</div>
            <div class="spotC3">&spades;</div>
            <div class="spotC5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('nove_espadas')" class="card nove_espadas">
          <div class="front">
            <div class="index">
              9
              <br />&spades;
            </div>
            <div class="spotA1">&spades;</div>
            <div class="spotA2">&spades;</div>
            <div class="spotA4">&spades;</div>
            <div class="spotA5">&spades;</div>

            <div class="spotB3">&spades;</div>

            <div class="spotC1">&spades;</div>
            <div class="spotC2">&spades;</div>
            <div class="spotC4">&spades;</div>
            <div class="spotC5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('dez_espadas')" class="card dez_espadas">
          <div class="front">
            <div class="index">
              10
              <br />&spades;
            </div>
            <div class="spotA1">&spades;</div>
            <div class="spotA2">&spades;</div>
            <div class="spotA4">&spades;</div>
            <div class="spotA5">&spades;</div>

            <div class="spotB2">&spades;</div>
            <div class="spotB4">&spades;</div>

            <div class="spotC1">&spades;</div>
            <div class="spotC2">&spades;</div>
            <div class="spotC4">&spades;</div>
            <div class="spotC5">&spades;</div>
          </div>
        </div>

        <div v-if="isCarta('jack_espadas')" class="card jack_espadas">
          <div class="front red">
            <div class="index">
              J
              <br />&diams;
            </div>
            <img class="face" src="../assets/jack.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('queen_espadas')" class="card queen_espadas">
          <div class="front red">
            <div class="index">
              Q
              <br />&diams;
            </div>
            <img class="face" src="../assets/queen.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('king_espadas')" class="card king_espadas">
          <div class="front red">
            <div class="index">
              K
              <br />&diams;
            </div>
            <img class="face" src="../assets/king.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('as_espadas')" class="card as_espadas">
          <div class="front">
            <div class="index">
              A
              <br />&spades;
            </div>
            <div class="ace">&spades;</div>
          </div>
        </div>

        <!--Copas-->
        <div v-if="isCarta('dois_copas')" class="card dois_copas">
          <div class="front red">
            <div class="index">
              2
              <br />&hearts;
            </div>

            <div class="spotB1">&hearts;</div>
            <div class="spotB5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('tres_copas')" class="card tres_copas">
          <div class="front red">
            <div class="index">
              3
              <br />&hearts;
            </div>

            <div class="spotB1">&hearts;</div>
            <div class="spotB3">&hearts;</div>
            <div class="spotB5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('quatro_copas')" class="card quatro_copas">
          <div class="front red">
            <div class="index">
              4
              <br />&hearts;
            </div>
            <div class="spotA1">&hearts;</div>
            <div class="spotA5">&hearts;</div>
            <div class="spotC1">&hearts;</div>
            <div class="spotC5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('cinco_copas')" class="card cinco_copas">
          <div class="front red">
            <div class="index">
              5
              <br />&hearts;
            </div>
            <div class="spotA1">&hearts;</div>
            <div class="spotA5">&hearts;</div>
            <div class="spotB3">&hearts;</div>
            <div class="spotC1">&hearts;</div>
            <div class="spotC5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('seis_copas')" class="card seis_copas">
          <div class="front red">
            <div class="index">
              6
              <br />&hearts;
            </div>
            <div class="spotA1">&hearts;</div>
            <div class="spotA3">&hearts;</div>
            <div class="spotA5">&hearts;</div>
            <div class="spotC1">&hearts;</div>
            <div class="spotC3">&hearts;</div>
            <div class="spotC5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('sete_copas')" class="card sete_copas">
          <div class="front red">
            <div class="index">
              7
              <br />&hearts;
            </div>
            <div class="spotA1">&hearts;</div>
            <div class="spotA3">&hearts;</div>
            <div class="spotA5">&hearts;</div>

            <div class="spotB2">&hearts;</div>

            <div class="spotC1">&hearts;</div>
            <div class="spotC3">&hearts;</div>
            <div class="spotC5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('oito_copas')" class="card oito_copas">
          <div class="front red">
            <div class="index">
              8
              <br />&hearts;
            </div>
            <div class="spotA1">&hearts;</div>
            <div class="spotA3">&hearts;</div>
            <div class="spotA5">&hearts;</div>

            <div class="spotB2">&hearts;</div>
            <div class="spotB4">&hearts;</div>

            <div class="spotC1">&hearts;</div>
            <div class="spotC3">&hearts;</div>
            <div class="spotC5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('nove_copas')" class="card nove_copas">
          <div class="front red">
            <div class="index">
              9
              <br />&hearts;
            </div>
            <div class="spotA1">&hearts;</div>
            <div class="spotA2">&hearts;</div>
            <div class="spotA4">&hearts;</div>
            <div class="spotA5">&hearts;</div>

            <div class="spotB3">&hearts;</div>

            <div class="spotC1">&hearts;</div>
            <div class="spotC2">&hearts;</div>
            <div class="spotC4">&hearts;</div>
            <div class="spotC5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('dez_copas')" class="card dez_copas">
          <div class="front red">
            <div class="index">
              10
              <br />&hearts;
            </div>
            <div class="spotA1">&hearts;</div>
            <div class="spotA2">&hearts;</div>
            <div class="spotA4">&hearts;</div>
            <div class="spotA5">&hearts;</div>

            <div class="spotB2">&hearts;</div>
            <div class="spotB4">&hearts;</div>

            <div class="spotC1">&hearts;</div>
            <div class="spotC2">&hearts;</div>
            <div class="spotC4">&hearts;</div>
            <div class="spotC5">&hearts;</div>
          </div>
        </div>

        <div v-if="isCarta('jack_copas')" class="card jack_copas">
          <div class="front red">
            <div class="index">
              J
              <br />&diams;
            </div>
            <img class="face" src="../assets/jack.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('queen_copas')" class="card queen_copas">
          <div class="front red">
            <div class="index">
              Q
              <br />&diams;
            </div>
            <img class="face" src="../assets/queen.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('king_copas')" class="card king_copas">
          <div class="front red">
            <div class="index">
              K
              <br />&diams;
            </div>
            <img class="face" src="../assets/king.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('as_copas')" class="card as_copas">
          <div class="front red">
            <div class="index">
              A
              <br />&hearts;
            </div>
            <div class="ace">&hearts;</div>
          </div>
        </div>

        <!--Ouros-->
        <div v-if="isCarta('dois_ouros')" class="card dois_ouros">
          <div class="front red">
            <div class="index">
              2
              <br />&diams;
            </div>

            <div class="spotB1">&diams;</div>
            <div class="spotB5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('tres_ouros')" class="card tres_ouros">
          <div class="front red">
            <div class="index">
              3
              <br />&diams;
            </div>

            <div class="spotB1">&diams;</div>
            <div class="spotB3">&diams;</div>
            <div class="spotB5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('quatro_ouros')" class="card quatro_ouros">
          <div class="front red">
            <div class="index">
              4
              <br />&diams;
            </div>
            <div class="spotA1">&diams;</div>
            <div class="spotA5">&diams;</div>
            <div class="spotC1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('cinco_ouros')" class="card cinco_ouros">
          <div class="front red">
            <div class="index">
              5
              <br />&diams;
            </div>
            <div class="spotA1">&diams;</div>
            <div class="spotA5">&diams;</div>
            <div class="spotB3">&diams;</div>
            <div class="spotC1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('seis_ouros')" class="card seis_ouros">
          <div class="front red">
            <div class="index">
              6
              <br />&diams;
            </div>
            <div class="spotA1">&diams;</div>
            <div class="spotA3">&diams;</div>
            <div class="spotA5">&diams;</div>
            <div class="spotC1">&diams;</div>
            <div class="spotC3">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('sete_ouros')" class="card sete_ouros">
          <div class="front red">
            <div class="index">
              7
              <br />&diams;
            </div>
            <div class="spotA1">&diams;</div>
            <div class="spotA3">&diams;</div>
            <div class="spotA5">&diams;</div>

            <div class="spotB2">&diams;</div>

            <div class="spotC1">&diams;</div>
            <div class="spotC3">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('oito_ouros')" class="card oito_ouros">
          <div class="front red">
            <div class="index">
              8
              <br />&diams;
            </div>
            <div class="spotA1">&diams;</div>
            <div class="spotA3">&diams;</div>
            <div class="spotA5">&diams;</div>

            <div class="spotB2">&diams;</div>
            <div class="spotB4">&diams;</div>

            <div class="spotC1">&diams;</div>
            <div class="spotC3">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('nove_ouros')" class="card nove_ouros">
          <div class="front red">
            <div class="index">
              9
              <br />&diams;
            </div>
            <div class="spotA1">&diams;</div>
            <div class="spotA2">&diams;</div>
            <div class="spotA4">&diams;</div>
            <div class="spotA5">&diams;</div>

            <div class="spotB3">&diams;</div>

            <div class="spotC1">&diams;</div>
            <div class="spotC2">&diams;</div>
            <div class="spotC4">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('dez_ouros')" class="card dez_ouros">
          <div class="front red">
            <div class="index">
              10
              <br />&diams;
            </div>
            <div class="spotA1">&diams;</div>
            <div class="spotA2">&diams;</div>
            <div class="spotA4">&diams;</div>
            <div class="spotA5">&diams;</div>

            <div class="spotB2">&diams;</div>
            <div class="spotB4">&diams;</div>

            <div class="spotC1">&diams;</div>
            <div class="spotC2">&diams;</div>
            <div class="spotC4">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('jack_ouros')" class="card jack_ouros">
          <div class="front red">
            <div class="index">
              J
              <br />&diams;
            </div>
            <img class="face" src="../assets/jack.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('queen_ouros')" class="card queen_ouros">
          <div class="front red">
            <div class="index">
              Q
              <br />&diams;
            </div>
            <img class="face" src="../assets/queen.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('king_ouros')" class="card king_ouros">
          <div class="front red">
            <div class="index">
              K
              <br />&diams;
            </div>
            <img class="face" src="../assets/king.gif" alt />
            <div class="spotA1">&diams;</div>
            <div class="spotC5">&diams;</div>
          </div>
        </div>

        <div v-if="isCarta('as_ouros')" class="card as_ouros">
          <div class="front red">
            <div class="index">
              A
              <br />&diams;
            </div>
            <div class="ace">&diams;</div>
          </div>
        </div>
      </div>

      <div class="item botao">
        <button class="button is-info" v-on:click="sortearCarta()">Sortear</button>
        <div class="descricao">{{descricaoCarta()}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase";

export default {
  name: "Deck",

  data: function () {
    return {
      cards: [
        { name: "dois_paus" },
        { name: "tres_paus" },
        { name: "quatro_paus" },
        { name: "cinco_paus" },
        { name: "seis_paus" },
        { name: "sete_paus" },
        { name: "oito_paus" },
        { name: "nove_paus" },
        { name: "dez_paus" },
        { name: "jack_paus" },
        { name: "queen_paus" },
        { name: "king_paus" },
        { name: "as_paus" },

        { name: "dois_espadas" },
        { name: "tres_espadas" },
        { name: "quatro_espadas" },
        { name: "cinco_espadas" },
        { name: "seis_espadas" },
        { name: "sete_espadas" },
        { name: "oito_espadas" },
        { name: "nove_espadas" },
        { name: "dez_espadas" },
        { name: "jack_espadas" },
        { name: "queen_espadas" },
        { name: "king_espadas" },
        { name: "as_espadas" },

        { name: "dois_copas" },
        { name: "tres_copas" },
        { name: "quatro_copas" },
        { name: "cinco_copas" },
        { name: "seis_copas" },
        { name: "sete_copas" },
        { name: "oito_copas" },
        { name: "nove_copas" },
        { name: "dez_copas" },
        { name: "jack_copas" },
        { name: "queen_copas" },
        { name: "king_copas" },
        { name: "as_copas" },

        { name: "dois_ouros" },
        { name: "tres_ouros" },
        { name: "quatro_ouros" },
        { name: "cinco_ouros" },
        { name: "seis_ouros" },
        { name: "sete_ouros" },
        { name: "oito_ouros" },
        { name: "nove_ouros" },
        { name: "dez_ouros" },
        { name: "jack_ouros" },
        { name: "queen_ouros" },
        { name: "king_ouros" },
        { name: "as_ouros" },
      ],
      id: null,
      carta_escolhida: null,
      loading: false,
    };
  },

  created() {
    this.buscarCartaSorteada();
  },

  methods: {
    buscarCartaSorteada: function () {
      this.loading = true;
      db.collection("jogos")
        .get()
        .then((querySnapShot) => {
          querySnapShot.forEach((doc) => {
            this.associarObjJogo(doc);
            this.escutarMudancasNoJogo();
            this.loading = false;
          });
        });
    },

    escutarMudancasNoJogo: function () {
      db.collection("jogos")
        .doc(this.id)
        .onSnapshot((doc) => {
          var source = doc.metadata.hasPendingWrites ? "Local" : "Server";
          if (source == "Server") {
            this.associarObjJogo(doc);
          }
        });
    },

    associarObjJogo: function (doc) {
      this.id = doc.id;
      this.carta_escolhida = doc.data().nome_carta_sorteada;
    },

    sortearCarta: function () {
      var cartaSorteada = Math.floor(Math.random() * this.cards.length);
      this.carta_escolhida = this.cards[cartaSorteada].name;
      this.atualizarStateJogo();
    },

    atualizarStateJogo: function () {
      this.loading = true;
      db.collection("jogos")
        .doc(this.id)
        .set({
          id: this.id,
          nome_carta_sorteada: this.carta_escolhida,
        })
        .then(() => {
          this.loading = false;
        });
    },

    isCarta: function (nome_carta) {
      return this.carta_escolhida == nome_carta;
    },

    descricaoCarta: function () {
      var descricao = "";

      if (this.carta_escolhida != null) {
        if (this.carta_escolhida.includes("as_")) {
          descricao = "Escolha uma pessoa pra beber";
        }

        if (this.carta_escolhida.includes("king_")) {
          descricao = "Homens bebem";
        }

        if (this.carta_escolhida.includes("queen_")) {
          descricao = "Mulheres bebem";
        }

        if (this.carta_escolhida.includes("jack_")) {
          descricao = "Todos bebem";
        }

        if (this.carta_escolhida.includes("dez_")) {
          descricao = "Regra - Escolhe-se uma regra para o jogo";
        }

        if (this.carta_escolhida.includes("nove_")) {
          descricao = "Mão na mesa/Continência";
        }

        if (this.carta_escolhida.includes("oito_")) {
          descricao =
            "Palavra não dita - Quem tirar a carta escolhe uma palavra que não pode ser dita. Quem falar bebe.";
        }

        if (this.carta_escolhida.includes("sete_")) {
          descricao =
            "Parceiro - Uma pessoa escolhe outra pra beber junto com ela sempre que ela beber";
        }

        if (this.carta_escolhida.includes("seis_")) {
          descricao = "Banheiro - Pessoa pode ir no banheiro";
        }

        if (this.carta_escolhida.includes("cinco_")) {
          descricao =
            "C/S/ Palavra composta - Cada pessoa tem que ir falando uma palavra que não pode começar nem com C nem com S nem ser composta, quem falar tem que beber.";
        }

        if (this.carta_escolhida.includes("quatro_")) {
          descricao =
            "Eu nunca - Uma pessoa fala uma coisa que ela nunca fez, quem já fez bebe";
        }

        if (this.carta_escolhida.includes("tres_")) {
          descricao =
            "PI - Cada um fala um número, múltiplos de 3 e que tenham 3 são substituídos por PI, quem errar bebe";
        }

        if (this.carta_escolhida.includes("dois_")) {
          descricao =
            "Escolhe duas pessoas para beber uma dose ou uma pessoa para beber duas doses";
        }
      }
      return descricao;
    },
  },
};
</script>

<style scoped>
.deck__circulo {
  background-color: hsl(48, 100%, 55%);
  border-radius: 90%;
  padding: 200px;
}
.deck__grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.item {
  padding: 0 10px;
}
.cartas {
  border: 1px blue solid;
}
.botao {
  width: 500px;
}

.descricao {
  padding-top: 24px;
  color: hsl(217, 100%, 27%);
}

.card {
  border-color: #808080 #000000 #000000 #808080;
  border-width: 1px;
  border-style: solid;
  color: #000000;
  font-size: 20pt;
  position: relative;
  width: 3.75em;
  height: 5em;
}

.front {
  background-color: #ffffff;
  color: #000000;
  position: absolute;
  width: 100%;
  height: 100%;
}

.ace {
  font-size: 300%;
  position: absolute;
  left: 0.325em;
  top: 0.1em;
}

.index {
  font-size: 50%;
  font-weight: bold;
  text-align: center;
  position: absolute;
  left: 0.25em;
  top: 0.25em;
}

.red {
  color: #ff0000;
}

.face {
  border: 1px solid #000000;
  position: absolute;
  left: 0.5em;
  top: 0.45em;
  width: 2.6em;
  height: 4em;
}

.spotA1 {
  position: absolute;
  left: 0.6em;
  top: 0.5em;
}
.spotA2 {
  position: absolute;
  left: 0.6em;
  top: 1.5em;
}
.spotA3 {
  position: absolute;
  left: 0.6em;
  top: 2em;
}
.spotA4 {
  position: absolute;
  left: 0.6em;
  top: 2.5em;
}
.spotA5 {
  position: absolute;
  left: 0.6em;
  top: 3.5em;
}

.spotB1 {
  position: absolute;
  left: 1.55em;
  top: 0.5em;
}
.spotB2 {
  position: absolute;
  left: 1.55em;
  top: 1em;
}
.spotB3 {
  position: absolute;
  left: 1.55em;
  top: 2em;
}
.spotB4 {
  position: absolute;
  left: 1.55em;
  top: 3em;
}
.spotB5 {
  position: absolute;
  left: 1.55em;
  top: 3.5em;
}

.spotC1 {
  position: absolute;
  left: 2.5em;
  top: 0.5em;
}
.spotC2 {
  position: absolute;
  left: 2.5em;
  top: 1.5em;
}
.spotC3 {
  position: absolute;
  left: 2.5em;
  top: 2em;
}
.spotC4 {
  position: absolute;
  left: 2.5em;
  top: 2.5em;
}
.spotC5 {
  position: absolute;
  left: 2.5em;
  top: 3.5em;
}

/* Loading */
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
