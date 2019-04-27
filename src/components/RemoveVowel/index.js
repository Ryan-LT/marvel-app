import React from 'react'

const removeVowel = () => {

    function disemvowel(e) {
        let str = e.target.value;
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let result = str.split('').filter(function (el) {
            return vowels.indexOf(el.toLowerCase()) === -1;
        }).join('');
        document.getElementById("targetText").innerHTML = result
    }



    return (
        <div>
            <input onChange={disemvowel} type='text' placeholder='input any string' />
            <br />
            <span>Result: </span><span id='targetText'></span>
        </div>
    )
};

export default removeVowel