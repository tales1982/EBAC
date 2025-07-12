"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//=========== MAp =============

//Para adcionar um valor utilizo o .set()

var meuMap = new Map();
meuMap.set('nome', 'Tales');
meuMap.set('stack', 'HTML, CSS, JS');
console.log(meuMap);

//Para recuperar um valor utilizo o get() e o nome da propriedade que quero recuperar.
var nomeRecuperado = meuMap.get('nome');
console.log(nomeRecuperado);

//Para saber a quantidade de itens dentro de um MAp utilio o atributo .size
console.log(meuMap.size);

//Podemos verificar se uma determinada chave exister dentro do Map passando .has
//Obs vai preocura pela chave nao o valor.
console.log(meuMap.has('nome'));

//Tambem posso apagar a chave e o valor do Map utlizando o .clear() vai zera a minha vareavel.
//meuMap.clear();
//console.log(meuMap)
//Agora tenho minha vareavel vazia

//Metodos para fazer uma iteracao em um Map para buscar pela chave.
var _iterator = _createForOfIteratorHelper(meuMap.keys()),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var chave = _step.value;
    console.log(chave);
  }

  //Se eu quizer fazer uma buscar pelos valores tem que utilizar o .values
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
var _iterator2 = _createForOfIteratorHelper(meuMap.values()),
  _step2;
try {
  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
    var valor = _step2.value;
    console.log(valor);
  }

  // Tambem posso fazer o for pelas entradas(item = chave + valor) que tem dentro do map.
} catch (err) {
  _iterator2.e(err);
} finally {
  _iterator2.f();
}
var _iterator3 = _createForOfIteratorHelper(meuMap.entries()),
  _step3;
try {
  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
    var entrada = _step3.value;
    console.log(entrada);
  }

  //Tambem posso fazer uma destruturacao; para formata a saida.
} catch (err) {
  _iterator3.e(err);
} finally {
  _iterator3.f();
}
var _iterator4 = _createForOfIteratorHelper(meuMap.entries()),
  _step4;
try {
  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
    var _step4$value = _slicedToArray(_step4.value, 2),
      _chave = _step4$value[0],
      _valor = _step4$value[1];
    console.log("".concat(_chave, " = ").concat(_valor));
  }

  //Para apagar uma chave e seu valor utilizor o .delete()
} catch (err) {
  _iterator4.e(err);
} finally {
  _iterator4.f();
}
meuMap.delete('stack');
console.log(meuMap);

// =========================== SET =============================
// Em JavaScript, o método set() é usado principalmente em contextos relacionados a estruturas de dados, 
// mais especificamente para a manipulação de objetos do tipo Set. Um Set é uma coleção de valores únicos, 
// o que significa que ele não permite duplicatas. O método set() é utilizado para adicionar um novo elemento a um objeto Set.
// Aqui está um exemplo de como ele é usado:

var cpf = new Set();
cpf.add('0037844855441');
cpf.add('0037844855445');
cpf.add('0037844855448');
console.log(cpf.keys());
console.log(cpf.values());

//possoo pecorre minha vareavel usando foresch
cpf.forEach(function (valor) {
  console.log(valor);
});

//Posso usar o set para remover uma lista de arrays com nomes repetidos 
var nomerRepetidos = ['Tales', 'Alex', 'Adria', 'Theo', 'Thomas', 'Tales', 'Adria'];
console.log(nomerRepetidos);
var nomesComOSet = new Set([].concat(nomerRepetidos));
console.log(nomesComOSet);
var salvandoNovoArrayDeNome = _toConsumableArray(nomesComOSet);
console.log(salvandoNovoArrayDeNome);