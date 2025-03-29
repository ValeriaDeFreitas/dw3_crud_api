import { isValidObjectId } from "mongoose";
import gameService from "./service/gameService.js";


//Função para listar os jogos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    //Requisição feita com sucesso - Cod. 200(OK)
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

//Função para cadastrar jogos
const createGame = async (req, res) => {
  try{
    //const title = req.body.title
    //const plataform = req.body.plataform

    //Desestruturação
    //Capturando valores
    const {title, plataform, year, price} = req.body
    //Cadastrando no banco
    await gameService.Create(title, plataform, year, price);
    res.sendStatus(201); //Código 201 (CREATED)
  }catch(error){
    console.log(error)
    res.status(500).json({error: "Erro interno do servidor."})
  }
};

//Função para deletar jogos 
const deleteGame = async (req, res) => {
  try{
    if(isObjectIdOrHexString.isValid(req.params.id)){
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204); //Código 204 (NO CONTENT)
    }else{
      res.sendStatus(400); //Código 400 (BAD REQUEST)
      //Requisição mal formada
    }

  }catch(error){
    console.log(error)
    res.status(500).json({error: 'Erro interno do servidor'})
  }
}

export default { getAllGames, createGame };
