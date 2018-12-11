'use strict';

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content;

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

var FIREBALL_COLOR = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];

var randomIndex = function (minIndex, maxIndex) {
  return Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);
};

var similarWizards = [];
for (var i = 0; i < 4; i++) {
  similarWizards.push({
    firstname: WIZARD_FIRSTNAMES[randomIndex(0, 7)],
    secondname: WIZARD_SECONDNAMES[randomIndex(0, 7)],
    coatColor: COAT_COLOR[randomIndex(0, 5)],
    eyesColor: EYES_COLOR[randomIndex(0, 4)]
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.firstname + ' ' + wizard.secondname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var j = 0; j < similarWizards.length; j++) {
  fragment.appendChild(renderWizard(similarWizards[j]));
}
similarListElement.appendChild(fragment);

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = setup.querySelector('.setup-close');
var ECS_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupWizard = document.querySelector('.setup-wizard');
var wizardEye = setupWizard.querySelector('.wizard-eyes');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardFireball = document.querySelector('.setup-fireball-wrap');

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ECS_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizardChangeColor = function (wizardColor, color) {
  wizardColor.style.fill = color;
};

var inputCoatColor = document.querySelector('input[name=coat-color]');
var inputEyeColor = document.querySelector('input[name=eye-color]');
var inputFireballColor = document.querySelector('input[name=fireball-color]');

wizardCoat.addEventListener('click', function () {
  var currentColor = COAT_COLOR[randomIndex(0, 5)];
  wizardChangeColor(wizardCoat, currentColor);
  inputCoatColor.value = currentColor;
});

wizardEye.addEventListener('click', function () {
  var currentColor = EYES_COLOR[randomIndex(0, 4)];
  wizardChangeColor(wizardEye, currentColor);
  inputEyeColor.value = currentColor;
});

wizardFireball.addEventListener('click', function () {
  var currentColor = FIREBALL_COLOR[randomIndex(0, 4)];
  wizardFireball.style.backgroundColor = currentColor;
  inputFireballColor.value = currentColor;
});
