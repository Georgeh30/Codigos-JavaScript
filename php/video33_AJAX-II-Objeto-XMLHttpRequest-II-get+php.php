<?php
    $con = NULL; /* crea e inicializa la variable */
        try{

            /* nos conectamos con la base de datos mysql */
            $con = new PDO("mysql:host=localhost; dbname=marvel; charset=utf8", 'root', 'sasa');

            /* si viene un campo con "id" obtendra ese "id" */
            if(isset($_GET['id'])){
                $id = $_GET['id']; /* guardara ese "id" */
                /* seleccionara esa fila con el primer "id" obtuvido */
                $sql = "SELECT * FROM characters WHERE id=$id"; /* guarda la fila */
            }else{ /* en caso de que no obtenga un "id" a través del GET */
                /* seleccionara todas las filas de la tabla */
                $sql = "SELECT * FROM characters"; /* guarda las filas */
            }
            /* prepara los datos obtenidos */
            $stm=$con->prepare($sql);
            /* los ejecuta */
            $stm->execute();
            /* los guarda en formato arreglo tipo (clave: valor) */
            $resultSet = $stm->fetchAll(PDO::FETCH_ASSOC);
            /* realiza un parseo de los datos a tipo arreglo json */
            echo json_encode($resultSet);
            
        }catch (PDOException $e){ /* en caso de que ocurra un error */
            echo "Error ".$e->getMessage(); /* imprime el mensaje del error */
        }
