let choix = 0
let adversaire = ""
let joueur = ""
input.onButtonPressed(Button.A, function () {
    choix = randint(0, 2)
    if (choix == 0) {
        adversaire = "Pierre"
    } else if (choix == 1) {
        adversaire = "Papier"
    } else {
        adversaire = "Ciseaux"
    }
    if (adversaire == "Ciseaux") {
        joueur = "Pierre"
    } else {
        joueur = ["Pierre", "Papier", "Ciseaux"][randint(0, 2)]
    }
    basic.showString("Adv: " + adversaire)
    basic.pause(500)
    basic.showString("Jou: " + joueur)
    if (joueur == "Pierre" && adversaire == "Ciseaux" || joueur == "Papier" && adversaire == "Pierre" || joueur == "Ciseaux" && adversaire == "Papier") {
        basic.showString("Gagne!")
    } else if (joueur == adversaire) {
        basic.showString("Egalite!")
    } else {
        basic.showString("Perdu!")
    }
})
