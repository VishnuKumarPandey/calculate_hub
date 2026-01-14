const v = (id) => Number(document.getElementById(id).value);
const t = (id, txt) => document.getElementById(id).innerText = txt;

const logs = {
    'home':  ["> SYSTEM BOOT", "> USER: VISHNU"],
    'bmi':   ["> VITALS SCAN", "> MASS_ANALYSIS"],
    'emi':   ["> BANK_LINK", "> LOAN_CALC"],
    'shop':  ["> PRICE_CHECK", "> DISC_APPLY"],
    'age':   ["> CHRONO_DATA", "> LIFE_SCAN"],
    'pass':  ["> SEC_ENCRYPT", "> PASS_CHECK"],
    'grade': ["> EDU_FILES", "> GPA_CORE"],
    'math':  ["> LOGIC_ON", "> HEX_READY"]
};

function nav(id) {
    document.querySelectorAll('.screen').forEach(e => e.classList.add('hide'));
    document.getElementById(id).classList.remove('hide');
    
    if(logs[id]) {
       
        document.getElementById('txt-l').innerHTML = logs[id][0] + "<br>> MONITORING...<br>> ...<br>> ...";
        document.getElementById('txt-r').innerHTML = logs[id][1] + "<br>> STACK_OK<br>> ...<br>> ...";
    }
}

function bmi() {
    let w = v('b-w'), h = v('b-h') / 100;
    if(!w || !h) return alert("MISSING INPUT");
    t('r-bmi', "BMI: " + (w / (h*h)).toFixed(1));
}

function emi() {
    let p = v('e-p'), r = v('e-r')/1200, n = v('e-t')*12;
    let e = (p * r * Math.pow(1+r, n)) / (Math.pow(1+r, n) - 1);
    t('r-emi', "EMI: " + e.toFixed(2));
}

function shop() {
    let p = v('s-p'), d = v('s-d'), tax = v('s-t');
    let res = (p - (p*d/100)); 
    res += res * tax/100;
    t('r-shop', "FINAL: " + res.toFixed(2));
}

function age() {
    let dVal = document.getElementById('a-d').value;
    if(!dVal) return alert("DATE?");
    let d = new Date(dVal), n = new Date();
    let y = n.getFullYear() - d.getFullYear(), m = n.getMonth() - d.getMonth(), da = n.getDate() - d.getDate();
    if (da < 0) { m--; da += 30; }
    if (m < 0) { y--; m += 12; }
    t('r-age', `ALIVE: ${y}Y, ${m}M, ${da}D`);
}

function pass() {
    let p = document.getElementById('p-i').value, s = 0;
    if(p.length > 5) s+=30;
    if(/[0-9]/.test(p)) s+=30;
    if(/[^A-Za-z0-9]/.test(p)) s+=40;
    t('r-pass', "SECURITY: " + s + "%");
}

function gpa() {
    let m = 0, tot = 0;
    for(let i=1; i<=5; i++) { m += v('g'+i); tot += v('t'+i); }
    if(!tot) return alert("NO TOTAL");
    let per = (m/tot)*100;
    t('r-gpa', `${per.toFixed(1)}% | ${per>70?'PASS':'FAIL'}`);
}

function math(op) {
    let n1 = v('m1'), n2 = v('m2'), r = 0;
    if(op == '+') r = n1+n2;
    if(op == '-') r = n1-n2;
    if(op == '*') r = n1*n2;
    if(op == '/') r = n1/n2;
    t('r-math', "RESULT: " + r);
}