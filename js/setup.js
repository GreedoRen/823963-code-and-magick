'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// var getRandomInteger = function (min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// var getRandomArrayElement = function (arr) {
//   return arr[getRandomInteger(0, arr.length - 1)];
// };

var WIZARD_FIRSTNAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var WIZARD_SECONDNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

var randomIndex = function (minIndex, maxIndex) {
  return Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
};

var similarWizards = [
  {
    firstname: WIZARD_FIRSTNAMES[randomIndex(0, 7)],
    secondname: WIZARD_SECONDNAMES[randomIndex(0, 7)],
    coatColor: COAT_COLOR[randomIndex(0, 5)],
    eyesColor: EYES_COLOR[randomIndex(0, 4)]
  },
  {
    firstname: WIZARD_FIRSTNAMES[randomIndex(0, 7)],
    secondname: WIZARD_SECONDNAMES[randomIndex(0, 7)],
    coatColor: COAT_COLOR[randomIndex(0, 5)],
    eyesColor: EYES_COLOR[randomIndex(0, 4)]
  },
  {
    firstname: WIZARD_FIRSTNAMES[randomIndex(0, 7)],
    secondname: WIZARD_SECONDNAMES[randomIndex(0, 7)],
    coatColor: COAT_COLOR[randomIndex(0, 5)],
    eyesColor: EYES_COLOR[randomIndex(0, 4)]
  },
  {
    firstname: WIZARD_FIRSTNAMES[randomIndex(0, 7)],
    secondname: WIZARD_SECONDNAMES[randomIndex(0, 7)],
    coatColor: COAT_COLOR[randomIndex(0, 5)],
    eyesColor: EYES_COLOR[randomIndex(0, 4)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.firstname + ' ' + wizard.secondname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < similarWizards.length; i++) {
  fragment.appendChild(renderWizard(similarWizards[i]));
}
similarListElement.appendChild(fragment);

// function randomValue(random) {
//   return random[Math.floor(Math.random() * random.length)];
// }

// function getRandomWizard() {
//   return {
//     name: randomValue(WIZARD_FIRSTNAMES) + ' ' + randomValue(WIZARD_SECONDNAMES),
//     coatColor: randomValue(coatColor),
//     eyesColor: randomValue(eyesColor),
//   };
// }

// function getRandomWizardList(count) {
//   var results = [];

//   for (var i = 0; i < count; i++) {
//     results.push(getRandomWizard());
//   }

//   return results;
// }
// var wizardNames = Math.floor(Math.random() * WIZARD_FIRSTNAMES.length);

// var wizard = new wizardPlayer(WIZARD_FIRSTNAMES[wizardNames], WIZARD_SECONDNAMES, coatColor, eyesColor);

// WIZARD_FIRSTNAMES.splice(wizardNames, 1);

// for (var i = 0; i < 4; i++) {
//   var wizardElement = similarWizardTemplate.cloneNode(true);

//   wizardElement.querySelector('.setup-similar-label').textContent = WIZARD_FIRSTNAMES[wizardNames] + WIZARD_SECONDNAMES;
//   wizardElement.querySelector('.wizard-coat').style.fill = coatColor[i];
//   wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor[i];

//   similarListElement.appendChild(wizardElement);
// }
