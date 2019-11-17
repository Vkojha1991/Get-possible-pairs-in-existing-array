function getResult() {
            var n = document.getElementById('number').value;
            var ar = [1,1,1,1,2,3,3,3,3,3,3,3,4,4,4,4,4];
            function checkVal(el) {
                return el == n; 
            }
            var countEl = ar.filter(checkVal);
            var pairs = Math.floor(countEl.length / 2);
            console.log(pairs);
        }
