const actionLogic = {

  checkCurrentAction(state){
    let currentSquare = state.squares[state.activePlayer.position]
    let player = state.activePlayer

    if (currentSquare.setColor === "tax"){
      this.payTax(currentSquare, player)
    }
  },

  payTax(square, player){
    player.money -= square.rent
  }


}

export default actionLogic;
