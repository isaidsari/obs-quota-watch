const intervalMs = 5000;
const refreshElementId = 'btnKontenjanGoster';
const quotaElementId = 'lblKontenjan';
const refreshFunction = () => { __doPostBack(refreshElementId, '') };

function checkQuota(quotaText) {

    const quotaParts = quotaText.split('/');
    const total = parseInt(quotaParts[1]);
    const taken = parseInt(quotaParts[0]);

    return total - taken;
}

const intervalId = setInterval(() => {

    const quotaText = document.getElementById(quotaElementId).text;
    const quota = checkQuota(quotaText);

    if (quota > 0) {
        alert('Quota is available!');
        clearInterval(intervalId);
    }
    else {
        refreshFunction();
    }

}, intervalMs);
