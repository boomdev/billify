'use strict';
var ninja = { wallets: {} };
const state = {
  isDebug: false,
  step: 1,
};

if (state.isDebug) {
  document.getElementById('seedpool').style.display = 'block';
}
function generateParamsChanged() {
  document.getElementById('paperprint').disabled = true;
  if (document.getElementById('paperencrypt').checked) {
    document.getElementById('paperpassphrase').disabled = false;
    if (document.getElementById('paperpassphrase').value === '') {
      document.getElementById('papergenerate').disabled = true;
    } else {
      document.getElementById('papergenerate').disabled = false;
    }
  } else {
    document.getElementById('paperpassphrase').disabled = true;
    document.getElementById('paperpassphrase').value = '';
  }
}
function generate() {
  document.getElementById('paperprint').disabled = false;
  ninja.wallets.paperwallet.build(
    document.getElementById('paperlimit').value * 1,
    document.getElementById('paperlimitperpage').value * 1,
    !document.getElementById('paperart').checked,
    document.getElementById('paperpassphrase').value
  );
}
function setStep() {
  switch (state.step) {
    default:
    case 0:
      document.getElementById('selectCoin').style.display = 'block';
      document.getElementById('generate').style.display = 'none';
      document.getElementById('paperarea').style.display = 'none';
      break;
    case 1:
      document.getElementById('selectCoin').style.display = 'none';
      document.getElementById('generate').style.display = 'block';
      document.getElementById('paperarea').style.display = 'none';
      break;
    case 2:
      document.getElementById('selectCoin').style.display = 'none';
      document.getElementById('generate').style.display = 'none';
      document.getElementById('paperarea').style.display = 'block';
      break;
  }
}
function startOver() {
  location.reload();
}
function addRandomness(e) {
  if (e) {
    ninja.seeder.seed(e);
  } else {
    SecureRandom.seedTime();
  }
  if (document.getElementById('mousemovelimit').innerHTML === '100%') {
    document.getElementById('nextStepBtn2').disabled = false;
    document.getElementById('infoMsg').innerHTML =
      'GREAT! Your keys will be 100% random. Click Next.';
    setTimeout(() => {
      // nextStep(2);
      document.getElementById('mouseBox').style.display = 'none';
      document.getElementById('txtBoxLbl').style.display = 'none';
      document.getElementById('generatekeyinput').style.display = 'none';
    }, 2000);
  }
}

let offlineCase;
if (!navigator.onLine) {
  document.getElementById('statusoffline').innerHTML = '&#10004;'; //✔
  offlineCase = 'good';
} else {
  document.getElementById('statusoffline').innerHTML = '&#9888;'; //⚠
  offlineCase = 'bad';
}
function checkOfflineStatus() {
  document.getElementById('statusoffline' + offlineCase).style.display =
    'block';
}
function nextStep(stepId) {
  if (state.step === 1) {
    ninja.seeder.removePoints();
  }
  state.step = stepId;
  setStep();
}
setStep();

document
  .getElementById('nextStepBtn1')
  .addEventListener('click', () => nextStep(1));
document
  .getElementById('nextStepBtn2')
  .addEventListener('click', () => nextStep(2));
document.getElementById('startOverBtn1').addEventListener('click', startOver);
document.getElementById('startOverBtn2').addEventListener('click', startOver);
document.getElementById('papergenerate').addEventListener('click', generate);
document.getElementById('paperprint').addEventListener('click', () => {
  window.print();
});
document
  .getElementById('statusoffline')
  .addEventListener('click', checkOfflineStatus);
document
  .getElementById('statuscrypto')
  .addEventListener('click', () => ninja.status.showCrypto());
document
  .getElementById('statusprotocol')
  .addEventListener('click', () => ninja.status.showProtocol());
document
  .getElementById('statusunittests')
  .addEventListener('click', () => ninja.status.showUnitTests());
document
  .getElementById('statuskeypool')
  .addEventListener('click', () => ninja.status.showKeyPool());
document.getElementById('statusokofflinegood').addEventListener('click', () => {
  document.getElementById('statusofflinegood').style.display = 'none';
});
document.getElementById('statusokofflinebad').addEventListener('click', () => {
  document.getElementById('statusofflinebad').style.display = 'none';
});
document.getElementById('statusokcryptogood').addEventListener('click', () => {
  document.getElementById('statuscryptogood').style.display = 'none';
});
document.getElementById('statusokcryptobad').addEventListener('click', () => {
  document.getElementById('statuscryptobad').style.display = 'none';
});
document
  .getElementById('statusokunittestsgood')
  .addEventListener('click', () => {
    document.getElementById('statusunittestsgood').style.display = 'none';
  });
document
  .getElementById('statusokunittestsbad')
  .addEventListener('click', () => {
    document.getElementById('statusunittestsbad').style.display = 'none';
  });
document
  .getElementById('statusokprotocolgood')
  .addEventListener('click', () => {
    document.getElementById('statusprotocolgood').style.display = 'none';
  });
document.getElementById('statusokprotocolbad').addEventListener('click', () => {
  document.getElementById('statusprotocolbad').style.display = 'none';
});
document
  .getElementById('statuskeypoolrefresh')
  .addEventListener('click', () => ninja.status.showKeyPool());
document.getElementById('statusokkeypool').addEventListener('click', () => {
  document.getElementById('statuskeypoolgood').style.display = 'none';
});

document
  .getElementById('mouseBox')
  .addEventListener('mousemove', addRandomness);
document
  .getElementById('generatekeyinput')
  .addEventListener('keydown', (event) => {
    ninja.seeder.seedKeyPress(event);
  });

document.getElementById('paperart').addEventListener('change', (event) => {
  ninja.wallets.paperwallet.toggleArt(event.target);
  generateParamsChanged();
});

document.getElementById('paperencrypt').addEventListener('change', (event) => {
  ninja.wallets.paperwallet.toggleEncrypt(event.target);
  generateParamsChanged();
});

document
  .getElementById('paperlimit')
  .addEventListener('change', generateParamsChanged);
document
  .getElementById('paperlimitperpage')
  .addEventListener('change', generateParamsChanged);
document
  .getElementById('paperpassphrase')
  .addEventListener('change', generateParamsChanged);
