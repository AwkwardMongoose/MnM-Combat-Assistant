/* DAMAGE CALCULATOR */

function calculateDamage() {
    let toughnessSave = document.getElementById('toughness-save-input').value
    let damageDC = document.getElementById('damage-DC-input').value
    let conditionNonlethal = document.getElementById('condition-list-nonlethal')
    let conditionLethal = document.getElementById('condition-list-lethal')
    let condition1Name = document.getElementById('condition-1')
    let condition2Name = document.getElementById('condition-2')
    let condition3Name = document.getElementById('condition-3')
    let condition1Content = document.getElementById('condition-content-1')
    let condition2Content = document.getElementById('condition-content-2')
    let condition3Content = document.getElementById('condition-content-3')
    let succeed = 0
    let fail = -1
    let fail5 = -5
    let fail10 = -10
    let fail15 = -15
    let damageTotal = toughnessSave-damageDC
    if (damageTotal >= succeed) {
        conditionNonlethal.innerHTML = 'No Effect'
        conditionLethal.innerHTML = 'No Effect'
        condition1Name.innerHTML = ''
        condition2Name.innerHTML = ''
        condition3Name.innerHTML = ''
        condition1Content.innerHTML = ''
        condition2Content.innerHTML = ''
        condition3Content.innerHTML = ''
        console.log("Succeed")
    }
    else if (damageTotal <= fail15) {
        conditionNonlethal.innerHTML = 'Unconscious'
        conditionLethal.innerHTML = 'Unconscious + Dying'
        condition1Name.innerHTML = 'Unconscious'
        condition2Name.innerHTML = 'Dying'
        condition3Name.innerHTML = ''
        condition1Content.innerHTML = 'An unconscious character is knocked out and helpless. Further damage against an unconscious character is considered lethal.'
        condition2Content.innerHTML = 'Immediate Fort Save (DC 10 + 1 per previous save made). If the Save fails, the character dies. if it succeeds, they remain Dying until stabilized with Healing (DC 10) or a Medicine check (DC 15), at which point they become Unconscious and Disabled.'
        condition3Content.innerHTML = ''
        console.log("Fail by 15")
    }
    else if (damageTotal <= fail10) {
        conditionNonlethal.innerHTML = 'Stunned + Staggered'
        conditionLethal.innerHTML = 'Stunned + Staggered + Disabled'
        condition1Name.innerHTML = 'Stunned'
        condition2Name.innerHTML = 'Staggered'
        condition3Name.innerHTML = 'Disabled'
        condition1Content.innerHTML = 'The character loses any dodge bonus to Defense, takes a –2 modifier to Defense, and cannot take actions other than reactions.'
        condition2Content.innerHTML = 'A staggered character can take a single move or standard action each round, not both. Any further damage to a staggered character shifts the character’s condition to unconscious.'
        condition3Content.innerHTML = 'A disabled character is conscious and able to act but badly injured. He can take only a single attack or move action each round, and if he performs any strenuous action, his condition changes to dying after the completing the action. Strenuous actions include moving all out, attacking, or using any ability requiring physical exertion or mental concentration (including any power requiring a standard action).'
        console.log("Fail by 10")
    }
    else if (damageTotal <= fail5) {
        conditionNonlethal.innerHTML = 'Stunned + Bruised'
        conditionLethal.innerHTML = 'Stunned + Bruised + Injured'
        condition1Name.innerHTML = 'Stunned'
        condition2Name.innerHTML = 'Bruised'
        condition3Name.innerHTML = 'Injured'
        condition1Content.innerHTML = 'The character loses any dodge bonus to Defense, takes a –2 modifier to Defense, and cannot take actions other than reactions.'
        condition2Content.innerHTML = 'The character has suffered some minor damage. Each bruised condition imposes a –1 penalty on Toughness saves to resist further nonlethal damage.'
        condition3Content.innerHTML = 'The character has suffered minor damage. Each injured condition imposes a –1 penalty on Toughness saves to resist further lethal damage.'
        console.log("Fail by 5")
    }
    else if (damageTotal <= fail) {
        conditionNonlethal.innerHTML = 'Bruised'
        conditionLethal.innerHTML = 'Bruised + Injured'
        condition1Name.innerHTML = 'Bruised'
        condition2Name.innerHTML = 'Injured'
        condition3Name.innerHTML = ''
        condition1Content.innerHTML = 'The character has suffered some minor damage. Each bruised condition imposes a –1 penalty on Toughness saves to resist further nonlethal damage.'
        condition2Content.innerHTML = 'The character has suffered minor damage. Each injured condition imposes a –1 penalty on Toughness saves to resist further lethal damage.'
        condition3Content.innerHTML = ''
        console.log("Fail")
    }
    else {
        alert("Something went wrong, check the fields!")
        console.log("Break")
    }
    console.log(damageTotal)
}


document.getElementById("toughness-save-input").addEventListener("focus", function() {
    let field = document.getElementById('toughness-save-input').value
    let fieldSet = document.getElementById('toughness-save-input')
    let blank = ''
    if (field == 0) {
        fieldSet.value = ''
    }
    else {
        return
    }
});

document.getElementById("damage-DC-input").addEventListener("focus", function() {
    let field = document.getElementById('damage-DC-input').value
    let fieldSet = document.getElementById('damage-DC-input')
    let blank = ''
    if (field == 0) {
        fieldSet.value = ''
    }
    else {
        return
    }
});

document.getElementById("toughness-save-input").addEventListener("focusout", function() {
    let field = document.getElementById('toughness-save-input').value
    let fieldSet = document.getElementById('toughness-save-input')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 0
    }
    else {
        return
    }
});

document.getElementById("damage-DC-input").addEventListener("focusout", function() {
    let field = document.getElementById('damage-DC-input').value
    let fieldSet = document.getElementById('damage-DC-input')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 0
    }
    else {
        return
    }
});

document.querySelectorAll(".damage-input").forEach(i => i.addEventListener("focusout", function() {
    calculateDamage()
}));


/* KNOCKBACK CALCULATOR */

var knockbackTotal = 0;
var knockbackDefense = 0;


function resetKnockback() {
    let damageBonus = document.getElementById('kb-damage-bonus')
    let knockbackBonus = document.getElementById('kb-knockback-bonus')
    let toughnessBonus = document.getElementById('kb-toughness-bonus')
    let imperviousBonus = document.getElementById('kb-impervious-bonus')
    let immovableBonus = document.getElementById('kb-immovable-bonus')
    let sizeBonus = document.getElementById('size-select')
    
    damageBonus.value = 0
    knockbackBonus.value = 0
    toughnessBonus.value = 0
    imperviousBonus.value = 0
    immovableBonus.value = 0
    sizeBonus.value = 0

    calculateTotal()
}

function calculateTotal() {
    let damageBonus = parseInt(document.getElementById('kb-damage-bonus').value)
    let knockbackBonus = parseInt(document.getElementById('kb-knockback-bonus').value)
    let toughnessBonus = parseInt(document.getElementById('kb-toughness-bonus').value)
    let imperviousBonus = parseInt(document.getElementById('kb-impervious-bonus').value)
    let immovableBonus = parseInt(document.getElementById('kb-immovable-bonus').value)
    let sizeBonus = parseInt(document.getElementById('size-select').value)
    let defenseTotal = document.getElementById('kb-total-bonus')
    let distanceOutput = document.getElementById('kb-distance-output')
    

    if (imperviousBonus >= toughnessBonus) {
        var toughnessTotal = imperviousBonus;
    } else {
        let remainingToughness = toughnessBonus - imperviousBonus;
        let halfToughness = remainingToughness/2
        let actualToughness = Math.floor(halfToughness)
        var toughnessTotal = imperviousBonus+actualToughness;
    }





    knockbackTotal = damageBonus + knockbackBonus;
    knockbackDefense = toughnessTotal+immovableBonus+sizeBonus;

    defenseTotal.value = knockbackDefense

    let knockbackDifference = knockbackTotal-knockbackDefense

    if (knockbackDifference > 28) {
        distanceOutput.value = '∞'
    } else if (knockbackDifference < 0) {
        distanceOutput.value = distance[0]
    } else if (knockbackDifference >= 0) {
        distanceOutput.value = distance[knockbackDifference]
    } else {
        alert('Something went wrong with the knockback difference.')
        return
    }
    
    

    console.log(knockbackTotal, knockbackDefense)
}

document.getElementById("reset-knockback").addEventListener("click", function() {
    resetKnockback()
});


document.getElementById("kb-damage-bonus").addEventListener("focus", function() {
    let field = document.getElementById('kb-damage-bonus').value
    let fieldSet = document.getElementById('kb-damage-bonus')
    let blank = ''
    if (field == 0) {
        fieldSet.value = ''
    }
    else {
        return
    }
});

document.getElementById("kb-knockback-bonus").addEventListener("focus", function() {
    let field = document.getElementById('kb-knockback-bonus').value
    let fieldSet = document.getElementById('kb-knockback-bonus')
    let blank = ''
    if (field == 0) {
        fieldSet.value = ''
    }
    else {
        return
    }
});

document.getElementById("kb-toughness-bonus").addEventListener("focus", function() {
    let field = document.getElementById('kb-toughness-bonus').value
    let fieldSet = document.getElementById('kb-toughness-bonus')
    let blank = ''
    if (field == 0) {
        fieldSet.value = ''
    }
    else {
        return
    }
});

document.getElementById("kb-impervious-bonus").addEventListener("focus", function() {
    let field = document.getElementById('kb-impervious-bonus').value
    let fieldSet = document.getElementById('kb-impervious-bonus')
    let blank = ''
    if (field == 0) {
        fieldSet.value = ''
    }
    else {
        return
    }
});

document.getElementById("kb-immovable-bonus").addEventListener("focus", function() {
    let field = document.getElementById('kb-immovable-bonus').value
    let fieldSet = document.getElementById('kb-immovable-bonus')
    let blank = ''
    if (field == 0) {
        fieldSet.value = ''
    }
    else {
        return
    }
});



document.getElementById("kb-damage-bonus").addEventListener("focusout", function() {
    let field = document.getElementById('kb-damage-bonus').value
    let fieldSet = document.getElementById('kb-damage-bonus')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 0
    }
    else {
        return
    }
});

document.getElementById("kb-knockback-bonus").addEventListener("focusout", function() {
    let field = document.getElementById('kb-knockback-bonus').value
    let fieldSet = document.getElementById('kb-knockback-bonus')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 0
    }
    else {
        return
    }
});

document.getElementById("kb-toughness-bonus").addEventListener("focusout", function() {
    let field = document.getElementById('kb-toughness-bonus').value
    let fieldSet = document.getElementById('kb-toughness-bonus')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 0
    }
    else {
        return
    }
});

document.getElementById("kb-impervious-bonus").addEventListener("focusout", function() {
    let field = document.getElementById('kb-impervious-bonus').value
    let fieldSet = document.getElementById('kb-impervious-bonus')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 0
    }
    else {
        return
    }
});

document.getElementById("kb-immovable-bonus").addEventListener("focusout", function() {
    let field = document.getElementById('kb-immovable-bonus').value
    let fieldSet = document.getElementById('kb-immovable-bonus')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 0
    }
    else {
        return
    }
});

document.getElementById('knockback-calculator-tab').addEventListener("load", function() {
    calculateTotal()
});

document.querySelectorAll(".kb-input").forEach(i => i.addEventListener("focusout", function() {
    calculateTotal()
}));

document.getElementById('size-select').addEventListener("change", function() {
    calculateTotal()
});



/* THROWING CALCULATOR */

function closest(arr, closestTo){
    
    var closest = Math.max.apply(null, arr);
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] >= closestTo && arr[i] < closest) closest = arr[i];
    }
    
    return closest;
}



function calculateThrowing() {
    let weight = parseInt(document.getElementById('throw-weight').value)
    let strength = parseInt(document.getElementById('throw-strength').value)
    let weightClass = parseInt(document.getElementById('weight-class').value)
    let throwDistanceOutput = document.getElementById('throw-distance-output')

    if (weightClass == 0) {
        var weightStrength = pounds.indexOf(closest(pounds, weight))
        console.log('pounds')
    } else if (weightClass == 1) {
        console.log('tons')
        var weightStrength = tons.indexOf(closest(tons, weight))
    }

    var strengthDifference = strength - weightStrength;

    var distanceStrength = Math.floor(strengthDifference/5)

    if (distanceStrength < 0) {
        throwDistanceOutput.value = "You cannot throw this object."
    } else if (distanceStrength > 25) {
        throwDistanceOutput.value = '∞'
    } else if (distanceStrength >= 0) {
        throwDistanceOutput.value = throwDistance[distanceStrength];
    }

    //NOTE: 25 is the stop point for throw distance
    
    console.log(strength, weightStrength, strengthDifference, distanceStrength)
    console.log()
}





document.getElementById("throw-weight").addEventListener("focus", function() {
    let field = document.getElementById('throw-weight').value
    let fieldSet = document.getElementById('throw-weight')
    let blank = ''
    if (field == 0) {
        fieldSet.value = ''
    }
    else {
        return
    }
});

document.getElementById("throw-strength").addEventListener("focus", function() {
    let field = document.getElementById('throw-strength').value
    let fieldSet = document.getElementById('throw-strength')
    let blank = ''
    if (field == 10) {
        fieldSet.value = ''
    }
    else {
        return
    }
});

document.getElementById("throw-weight").addEventListener("focusout", function() {
    let field = document.getElementById('throw-weight').value
    let fieldSet = document.getElementById('throw-weight')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 0;
    }
    else {
        return
    }
});

document.getElementById("throw-strength").addEventListener("focusout", function() {
    let field = document.getElementById('throw-strength').value
    let fieldSet = document.getElementById('throw-strength')
    let blank = ''
    if (field == blank) {
        fieldSet.value = 10;
    }
    else {
        return
    }
});

document.querySelectorAll(".throw-input").forEach(i => i.addEventListener("focusout", function() {
    calculateThrowing()
}));






/* CONDITION DICTIONARY */

function conditionSearchBar() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("condition-search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("condition-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("label")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function defineCondition() {
    let currentCondition = document.querySelector('input[name="conditions"]:checked').id
    let definitionDisplay = document.getElementById('condition-definition-display')

    switch (currentCondition) {
        case 'cond-ability-damage':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Ability Damage</p><p class='conditions-definitions-div'>The character has temporarily lost 1 or more ability score points. Lost ability score points return at a rate of 1 per day, or according to the effect which lowered the score (usually 1 per round for trait effect powers like Drain)."
        break;
        case 'cond-blinded':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Blinded</p><p class='conditions-definitions-div'>The character cannot see at all, and thus everything has total visual concealment from him. He has a 50% chance to miss in combat, loses his dodge bonus to Defense, and suffers an additional –2 modifier to Defense. He moves at half speed and suffers a –4 penalty on most Strength and Dexterity-based skill checks. He cannot make Notice (spot) skill checks or perform any other activity (such as reading) requiring vision."
        break;
        case 'cond-bruised':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Bruised</p><p class='conditions-definitions-div'>The character has suffered some minor damage. Each bruised condition imposes a –1 penalty on Toughness saves to resist further nonlethal damage.</p><p class='conditions-definitions-div'>Once per minute of rest (10 rounds), characters can make a Constitution check (DC 10). If successful, they erase one bruised condition. If the check fails, the character can make another in one minute, with a +1 bonus for each failed check. All characters recover at least one bruised condition per 10 minutes. Injured characters must recover from all injuries before they recover from being bruised."
        break;
        case 'cond-dazed':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Dazed</p><p class='conditions-definitions-div'>A dazed character can take no actions, but retains dodge bonus to Defense."
        break;
        case 'cond-dead':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Dead</p><p class='conditions-definitions-div'>The character is dead. A dead body generally decays, but effects allowing a character to come back from death restore the body to full health or to its condition immediately prior to death. Either way, characters who have come back from the dead needn’t worry about rigor mortis, decomposition, and other similar sorts of unpleasantness."
        break;
        case 'cond-deafened':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Deafened</p><p class='conditions-definitions-div'>A deafened character cannot hear and suffers a –4 penalty to initiative checks. He cannot make Notice (listen) checks."
        break;
        case 'cond-debilitated':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Debilitated</p><p class='conditions-definitions-div'>The character has one or more ability scores lowered to 0. A character with Strength 0 falls prone and is helpless. A character with Dexterity 0 is paralyzed. A character with Constitution 0 is dying. A character with Intelligence, Wisdom, or Charisma 0 is unconscious."
        break;
        case 'cond-disabled':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Disabled</p><p class='conditions-definitions-div'>A disabled character is conscious and able to act but badly injured. He can take only a single attack or move action each round, and if he performs any strenuous action, his condition changes to dying after the completing the action. Strenuous actions include moving all out, attacking, or using any ability requiring physical exertion or mental concentration (including any power requiring a standard action).</p><p class='conditions-definitions-div'>Once per day of rest, characters can make a Constitution check (DC 10). If successful, they erase the disabled damage box. If the check fails, the character can make another in one day, with a +1 bonus for each failed check."
        break;
        case 'cond-dying':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Dying</p><p class='conditions-definitions-div'>A dying character is unconscious and near death. Upon gaining this condition the character must immediately make a Fortitude save (DC 10). If the save fails, the character dies. Dying characters make this save each hour thereafter, with a cumulative +1 to the DC for every hour they remain dying. If the save succeeds by 10 or more or the roll is a natural 20, the character automatically stabilizes and becomes unconscious and disabled (and may recover from both conditions normally). Another character can stabilize a dying character with a successful Medicine check (DC 15) or through the use of a power like Healing (see page 87)."
        break;
        case 'cond-entangled':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Entangled</p><p class='conditions-definitions-div'>An entangled character suffers a –2 penalty to attack rolls, a –2 penalty to Defense, and a –4 penalty to effective Dexterity. If the bonds are anchored to an immobile object, the entangled character cannot move. Otherwise, he can move at half speed, but can’t move all out or charge. An already entangled character who is entangled again becomes helpless."
        break;
        case 'cond-exhausted':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Exhausted</p><p class='conditions-definitions-div'>Exhausted characters are near collapse. They move at half normal speed and suffer a –6 penalty to effective Strength and Dexterity and a –3 penalty on attack and defense. An exhausted character suffering another fatigue result falls unconscious (and must recover from it normally)."
        break;
        case 'cond-fascinated':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Fascinated</p><p class='conditions-definitions-div'>Entranced by an effect. A fascinated character stands or sits, taking no actions other than to pay attention to the fascinating effect, for as long as the effect lasts. The character takes a –4 penalty on checks made as reactions, such as Notice checks. Any potential threat allows the fascinated character a new saving throw or resistance check to overcome the fascination. Any obvious threat, such as someone drawing a weapon, using an offensive power, or aiming an attack at the fascinated character, automatically breaks the fascination. An ally can shake a fascinated character free of the effect with an aid action."
        break;
        case 'cond-fatigued':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Fatigued</p><p class='conditions-definitions-div'>Fatigued characters cannot move all out or charge and suffer a –2 penalty to effective Strength and Dexterity and a –1 penalty on attack and defense. A fatigued character who does something else that would normally cause fatigue becomes exhausted."
        break;
        case 'cond-flatfooted':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Flat-Footed</p><p class='conditions-definitions-div'>A character who has not yet acted during a combat is flatfooted, not yet reacting to the situation. A flat-footed character loses his dodge bonus to Defense."
        break;
        case 'cond-frightened':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Frightened</p><p class='conditions-definitions-div'>A frightened character tries to flee from the source of the fear as quickly as possible. If unable to flee, the character is shaken."
        break;
        case 'cond-grappled':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Grappled</p><p class='conditions-definitions-div'>Engaged in wrestling or some other form of hand-to-hand struggle with one or more attackers. A grappled character cannot move or take any action more complicated than making a barehanded attack, using a small weapon or a power, or attempting to break free from the grapple. In addition, grappled characters lose any dodge bonus against opponents they aren’t grappling."
        break;
        case 'cond-helpless':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Helpless</p><p class='conditions-definitions-div'>Sleeping, bound, paralyzed or unconscious characters are helpless. Enemies can make advantageous attacks against helpless characters, or even deliver a coup de grace. A melee attack against a helpless character is at a +4 bonus on the attack roll (equivalent to attacking a prone target). A helpless character loses any dodge bonus and takes a –9 penalty to Defense against attacks from adjacent opponents, and a –5 penalty to Defense against ranged attacks."
        break;
        case 'cond-incorporeal':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Incorporeal</p><p class='conditions-definitions-div'>Having no physical body. Incorporeal characters are immune to attacks from corporeal sources. They can be harmed only by other incorporeal beings or attacks with the Affects Incorporeal modifier (see page 111). Mental and sensory effects work normally on incorporeal beings."
        break;
        case 'cond-injured':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Injured</p><p class='conditions-definitions-div'>The character has suffered minor damage. Each injured condition imposes a –1 penalty on Toughness saves to resist further lethal damage.</p><p class='conditions-definitions-div'>Once per hour of rest, characters can make a Constitution check (DC 10). If successful, they erase one injured condition. If the check fails, the character can make another in one hour, with a +1 bonus for each failed check. All characters recover at least one injured condition per 10 hours."
        break;
        case 'cond-invisible':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Invisible</p><p class='conditions-definitions-div'>Virtually undetectable. Invisible characters gain a +2 bonus to hit defenders unaware of them, and such defenders lose their dodge bonus to Defense. Attacks against invisible characters have a 50% miss chance."
        break;
        case 'cond-nauseated':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Nauseated</p><p class='conditions-definitions-div'>Nauseated characters can only take a single move action each round, meaning they are unable to attack (or take other standard actions) or move all out (or take other full-round actions)."
        break;
        case 'cond-normal':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Normal</p><p class='conditions-definitions-div'>The character is unharmed and unaffected by other conditions, acting normally."
        break;
        case 'cond-panicked':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Panicked</p><p class='conditions-definitions-div'>A panicked character flees as fast as possible or cowers, dazed, if unable to get away. A panicked character defends normally but cannot attack."
        break;
        case 'cond-paralyzed':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Paralyzed</p><p class='conditions-definitions-div'>A paralyzed character stands rigid and helpless, unable to move or act physically. He has effective Strength and Dexterity scores of 0 but may take purely mental actions (including using powers that do not require a physical action or attack roll). A paralyzed character’s Defense score is 5, the same as an inanimate object."
        break;
        case 'cond-pinned':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Pinned</p><p class='conditions-definitions-div'>Held immobile (but not helpless) in a grapple. Pinned characters lose their dodge bonus and suffer a –4 penalty to Defense."
        break;
        case 'cond-prone':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Prone</p><p class='conditions-definitions-div'>The character is lying on the ground. He suffers a –4 penalty on melee attack rolls. Opponents receive a +4 bonus on melee attacks against him but a –4 penalty on ranged attacks. Standing up is a move action."
        break;
        case 'cond-shaken':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Shaken</p><p class='conditions-definitions-div'>A shaken character has a –2 penalty on attack rolls, saving throws, and checks."
        break;
        case 'cond-sickened':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Sickened</p><p class='conditions-definitions-div'>A sickened character has a –2 penalty on attack rolls and checks."
        break;
        case 'cond-slowed':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Slowed</p><p class='conditions-definitions-div'>A slowed character can only take a standard or move action each round (not both). The character takes a –1 penalty on attack rolls, Defense, and Reflex saves. A slowed character moves at half normal speed."
        break;
        case 'cond-stable':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Stable</p><p class='conditions-definitions-div'>A stable character is no longer dying, but is still unconscious and disabled and must recover from those conditions normally."
        break;
        case 'cond-staggered':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Staggered</p><p class='conditions-definitions-div'>A staggered character can take a single move or standard action each round, not both. Any further damage to a staggered character shifts the character’s condition to unconscious.</p><p class='conditions-definitions-div'>Once per hour of rest, characters can make a Constitution check (DC 10). If successful, they erase the Staggered damage box. If the check fails, the character can make another in one hour, with a +1 bonus for each failed check. Disabled characters must recover all their disabled boxes before they can recover from being staggered."
        break;
        case 'cond-stunned':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Stunned</p><p class='conditions-definitions-div'>The character loses any dodge bonus to Defense, takes a –2 modifier to Defense, and cannot take actions other than reactions."
        break;
        case 'cond-unconscious':
            definitionDisplay.innerHTML = "</p><p style='font-size: 18px; text-align: center;'>Unconscious</p><p class='conditions-definitions-div'>Knocked out and helpless.</p><p class='conditions-definitions-div'>Once per minute, characters can make a Constitution check (DC 10). If successful, they erase the Unconscious damage box. If the check fails, the character can make another in one minute, with a +1 bonus for each failed check. Dying characters must first stabilize before they can recover from unconsciousness."
        break;
    }

    console.log(currentCondition)
}


document.querySelectorAll('input[name="conditions"]').forEach(i => i.addEventListener("change", function() {
    defineCondition()
}));



/* TAB SELECTOR */

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
document.getElementById("defaultOpen").click();




/* DISTANCE ARRAY */


const distance = [
    'None',
    'Knocked Prone',
    'Knocked Prone',
    '5 ft.',
    '10 ft.',
    '25 ft.',
    '50 ft.',
    '100 ft.',
    '250 ft.',
    '500 ft.',
    '1,000 ft.',
    '2,500 ft.',
    '5,000 ft.',
    '10,000 ft.',
    '25,000 ft.',
    '50,000 ft.',
    '100,000 ft.',
    '250,000 ft.',
    '500,000 ft.',
    '1,000,000 ft.',
    '2,500,000 ft.',
    '5,000,000 ft.',
    '10,000,000 ft.',
    '25,000,000 ft.',
    '50,000,000 ft.',
    '100,000,000 ft.',
    '250,000,000 ft.',
    '500,000,000 ft.',
    '~7.5x Earth Circumference'
    ]

    const throwDistance = [
        '5 ft.',
        '10 ft.',
        '25 ft.',
        '50 ft.',
        '100 ft.',
        '250 ft.',
        '500 ft.',
        '1,000 ft.',
        '2,500 ft.',
        '5,000 ft.',
        '10,000 ft.',
        '25,000 ft.',
        '50,000 ft.',
        '100,000 ft.',
        '250,000 ft.',
        '500,000 ft.',
        '1,000,000 ft.',
        '2,500,000 ft.',
        '5,000,000 ft.',
        '10,000,000 ft.',
        '25,000,000 ft.',
        '50,000,000 ft.',
        '100,000,000 ft.',
        '250,000,000 ft.',
        '500,000,000 ft.',
        '~7.5x Earth Circumference'
        ]



/* HEAVY LOAD ARRAY LBS. */

const pounds = [
    0,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    100,
    115,
    130,
    150,
    175,
    200,
    230,
    260,
    300,
    350,
    400,
    460,
    520,
    600,
    700,
    800,
    920,
    1040,
    1200,
    1400,
    1600,
    1880,
    2160,
    2440,
    2720,
    3000,
    3600,
    4200,
    4800,
    5400,
    6000,
    7200,
    8400,
    9600,
    10800,
    12000,
    14400,
    16800,
    19200,
    21600,
    24000,
    28800,
    33600,
    38400,
    43200,
    48000,
    58400,
    68800,
    79200,
    89600,
    100000,
    120000,
    140000,
    160000,
    180000,
    200000,
    240000,
    280000,
    320000,
    360000,
    400000,
    480000,
    560000,
    640000,
    720000,
    800000,
    960000,
    1120000,
    1280000,
    1440000,
    1600000,
    1920000,
    2240000,
    2560000,
    2880000,
    3200000,
    3840000,
    4480000,
    5120000,
    5760000,
    6400000,
    7680000,
    8960000,
    10240000,
    11520000,
    12800000,
    15240000,
    17680000,
    20120000,
    22560000,
    25000000,
    30000000,
    35000000,
    40000000,
    45000000,
    50000000,
    60000000,
    70000000,
    80000000,
    90000000,
    100000000,
    120000000,
    140000000,
    160000000,
    180000000,
    200000000,
    240000000,
    280000000,
    320000000,
    360000000,
    400000000,
    480000000,
    560000000,
    640000000,
    720000000,
    800000000,
    960000000,
    1120000000,
    1280000000,
    1440000000,
    1600000000,
    1920000000,
    2240000000,
    2560000000,
    2880000000,
    3200000000,
    3840000000,
    4480000000,
    5120000000,
    5760000000,
    6400000000,
    7680000000,
    8960000000,
    10240000000,
    11520000000,
    12800000000,
    15360000000,
    17920000000,
    20480000000,
    23040000000,
    25600000000,
    30720000000,
    35840000000,
    40960000000,
    46080000000,
    51200000000,
    61440000000,
    71680000000,
    81920000000,
    92160000000,
    102400000000,
    122880000000,
    143360000000,
    163840000000,
    184320000000,
    204800000000,
    245760000000,
    286720000000,
    327680000000,
    368640000000,
    409600000000,
    491520000000,
    573440000000,
    655360000000,
    737280000000,
    819200000000,
    983040000000,
    1146880000000,
    1310720000000,
    1474560000000,
    1638400000000,
    1966080000000,
    2293760000000,
    2621440000000,
    2949120000000,
    3276800000000,
    3932160000000,
    4587520000000,
    5242880000000,
    5898240000000,
    6553600000000,
    7864320000000,
    9175040000000,
    10485760000000,
    11796480000000,
    13107200000000,
    15728640000000,
    18350080000000,
    20971520000000,
    23592960000000,
    26214400000000,
    31457280000000,
    36700160000000,
    41943040000000,
    47185920000000,
    52428800000000,
    62914560000000,
    73400320000000,
    83886080000000,
    94371840000000,
    104857600000000,
    125829120000000,
    146800640000000,
    167772160000000,
    188743680000000,
    209715200000000,
    251658240000000,
    293601280000000,
    335544320000000,
    377487360000000,
    419430400000000,
    503316480000000,
    587202560000000,
    671088640000000,
    754974720000000,
    838860800000000,
    1006630000000000,
    1174410000000000,
    1342180000000000,
    1509950000000000,
    1677720000000000,
    2013270000000000,
    2348810000000000,
    2684350000000000,
    3019900000000000,
    3355440000000000,
    4026530000000000,
    4697620000000000,
    5368710000000000,
    6039800000000000,
    6710890000000000,
    8053060000000000,
    9395240000000000,
    10737400000000000,
    12079600000000000,
    13421800000000000,
    16106100000000000,
    18790500000000000,
    21474800000000000,
    24159200000000000,
    26843500000000000,
    32212300000000000,
    37581000000000000,
    42949700000000000,
    48318400000000000,
    53687100000000000,
    64424500000000000,
    75161900000000000,
    85899300000000000,
    96636800000000000,
    107374000000000000,
    128849000000000000,
    150324000000000000,
    171799000000000000,
    193274000000000000,
    214748000000000000,
    257698000000000000,
    300648000000000000,
    343597000000000000,
    386547000000000000,
    429497000000000000,
    515396000000000000,
    601295000000000000,
    687195000000000000,
    773094000000000000,
    858993000000000000,
    1030790000000000000,
    1202590000000000000,
    1374390000000000000,
    1546190000000000000,
    1717990000000000000,
    2061580000000000000,
    2405180000000000000,
    2748780000000000000,
    3092380000000000000,
    3435970000000000000,
    4123170000000000000,
    4810360000000000000,
    5497560000000000000,
    6184750000000000000,
    6871950000000000000,
    8246340000000000000,
    9620730000000000000,
    10995100000000000000,
    12369500000000000000,
    13743900000000000000,
    16492700000000000000,
    19241500000000000000,
    21990200000000000000,
    24739000000000000000,
    27487800000000000000
    ]



    /* HEAVY LOAD ARRAY TONS */


    const tons = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1.08,
        1.22,
        1.36,
        1.5,
        1.8,
        2.1,
        2.4,
        2.7,
        3,
        3.6,
        4.2,
        4.8,
        5.4,
        6,
        7.2,
        8.4,
        9.6,
        10.8,
        12,
        14.4,
        16.8,
        19.2,
        21.6,
        24,
        29.2,
        34.4,
        39.6,
        44.8,
        50,
        60,
        70,
        80,
        90,
        100,
        120,
        140,
        160,
        180,
        200,
        240,
        280,
        320,
        360,
        400,
        480,
        560,
        640,
        720,
        800,
        960,
        1120,
        1280,
        1440,
        1600,
        1920,
        2240,
        2560,
        2880,
        3200,
        3840,
        4480,
        5120,
        5760,
        6400,
        7620,
        8840,
        10060,
        11280,
        12500,
        15000,
        17500,
        20000,
        22500,
        25000,
        30000,
        35000,
        40000,
        45000,
        50000,
        60000,
        70000,
        80000,
        90000,
        100000,
        120000,
        140000,
        160000,
        180000,
        200000,
        240000,
        280000,
        320000,
        360000,
        400000,
        480000,
        560000,
        640000,
        720000,
        800000,
        960000,
        1120000,
        1280000,
        1440000,
        1600000,
        1920000,
        2240000,
        2560000,
        2880000,
        3200000,
        3840000,
        4480000,
        5120000,
        5760000,
        6400000,
        7680000,
        8960000,
        10240000,
        11520000,
        12800000,
        15360000,
        17920000,
        20480000,
        23040000,
        25600000,
        30720000,
        35840000,
        40960000,
        46080000,
        51200000,
        61440000,
        71680000,
        81920000,
        92160000,
        102400000,
        122880000,
        143360000,
        163840000,
        184320000,
        204800000,
        245760000,
        286720000,
        327680000,
        368640000,
        409600000,
        491520000,
        573440000,
        655360000,
        737280000,
        819200000,
        983040000,
        1146880000,
        1310720000,
        1474560000,
        1638400000,
        1966080000,
        2293760000,
        2621440000,
        2949120000,
        3276800000,
        3932160000,
        4587520000,
        5242880000,
        5898240000,
        6553600000,
        7864320000,
        9175040000,
        10485760000,
        11796480000,
        13107200000,
        15728640000,
        18350080000,
        20971520000,
        23592960000,
        26214400000,
        31457280000,
        36700160000,
        41943040000,
        47185920000,
        52428800000,
        62914560000,
        73400320000,
        83886080000,
        94371840000,
        104857600000,
        125829120000,
        146800640000,
        167772160000,
        188743680000,
        209715200000,
        251658240000,
        293601280000,
        335544320000,
        377487360000,
        419430400000,
        503316480000,
        587202560000,
        671088640000,
        754974720000,
        838860800000,
        1006632960000,
        1174405120000,
        1342177280000,
        1509949440000,
        1677721600000,
        2013265920000,
        2348810240000,
        2684354560000,
        3019898880000,
        3355443200000,
        4026531840000,
        4697620480000,
        5368709120000,
        6039797760000,
        6710886400000,
        8053063680000,
        9395240960000,
        10737418240000,
        12079595520000,
        13421772800000,
        16106127360000,
        18790481920000,
        21474836480000,
        24159191040000,
        26843545600000,
        32212254720000,
        37580963840000,
        42949672960000,
        48318382080000,
        53687091200000,
        64424509440000,
        75161927680000,
        85899345920000,
        96636764160000,
        107374182400000,
        128849018880000,
        150323855360000,
        171798691840000,
        193273528320000,
        214748364800000,
        257698037760000,
        300647710720000,
        343597383680000,
        386547056640000,
        429496729600000,
        515396075520000,
        601295421440000,
        687194767360000,
        773094113280000,
        858993459200000,
        1030790000000000,
        1202590000000000,
        1374390000000000,
        1546190000000000,
        1717990000000000,
        2061580000000000,
        2405180000000000,
        2748780000000000,
        3092380000000000,
        3435970000000000,
        4123170000000000,
        4810360000000000,
        5497560000000000,
        6184750000000000,
        6871950000000000,
        8246340000000000,
        9620730000000000,
        10995100000000000,
        12369500000000000,
        13743900000000000,
        ]