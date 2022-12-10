import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  
    return (
      <div>
        <h1>Nombre: {character.name}</h1>     
        <h3>Estatus: {character.status}</h3>
        <h3>Especie: {character.species}</h3>
       
      </div>
    
    )
  
  
}
