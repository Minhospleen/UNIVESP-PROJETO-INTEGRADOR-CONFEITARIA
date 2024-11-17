from flask import Flask, request, jsonify
from sqlalchemy import create_engine, Column, String, Integer, Date
from sqlalchemy.orm import sessionmaker, declarative_base
from datetime import datetime
from flask_cors import CORS

# Configuração do Flask e CORS
app = Flask(__name__)
CORS(app)

# Configuração do banco de dados e do SQLAlchemy
db = create_engine("sqlite:///instance.confeitaria.db")
Session = sessionmaker(bind=db)
session = Session()

Base = declarative_base()

# Definindo as classes do banco de dados


class Ingrediente(Base):
    __tablename__ = "ingredientes"

    id = Column(Integer, primary_key=True, autoincrement=True)
    nome_produto = Column(String, nullable=False)
    base = Column(String)
    recheio = Column(String)


class Encomenda(Base):
    __tablename__ = "encomendas"

    id = Column(Integer, primary_key=True, autoincrement=True)
    cliente = Column(String, nullable=False)
    bolo = Column(String, nullable=False)
    data = Column(Date, nullable=False)
    preco = Column(Integer, nullable=False)


# Criando as tabelas no banco de dados
Base.metadata.create_all(db)

# Rotas CRUD para Encomendas


@app.route("/cadastrar-encomenda", methods=["POST"])
def cadastrar_encomenda():
    try:
        dados = request.json
        cliente = dados.get("cliente")
        bolo = dados.get("bolo")
        preco = dados.get("preco")
        data_str = dados.get("data")

        if not cliente or not bolo or not preco or not data_str:
            return jsonify({"error": "Dados incompletos para cadastro!"}), 400

        data = datetime.strptime(data_str, "%Y-%m-%d").date()
        nova_encomenda = Encomenda(
            cliente=cliente, bolo=bolo, preco=preco, data=data)
        session.add(nova_encomenda)
        session.commit()
        return jsonify({"message": "Encomenda criada com sucesso!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/listar-encomendas", methods=["GET"])
def listar_encomendas():
    try:
        encomendas = session.query(Encomenda).all()
        resultado = [
            {
                "id": encomenda.id,
                "cliente": encomenda.cliente,
                "bolo": encomenda.bolo,
                "data": encomenda.data.strftime("%Y-%m-%d"),
                "preco": encomenda.preco,
            }
            for encomenda in encomendas
        ]
        return jsonify(resultado), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/atualizar-encomenda/<int:id>", methods=["PUT"])
def atualizar_encomenda(id):
    try:
        dados = request.json
        encomenda = session.query(Encomenda).filter(Encomenda.id == id).first()
        if not encomenda:
            return jsonify({"error": "Encomenda não encontrada!"}), 404

        encomenda.cliente = dados.get("cliente", encomenda.cliente)
        encomenda.bolo = dados.get("bolo", encomenda.bolo)
        encomenda.preco = dados.get("preco", encomenda.preco)
        data_str = dados.get("data", encomenda.data.strftime("%Y-%m-%d"))
        encomenda.data = datetime.strptime(data_str, "%Y-%m-%d").date()
        session.commit()
        return jsonify({"message": "Encomenda atualizada com sucesso!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/deletar-encomenda/<int:id>", methods=["DELETE"])
def deletar_encomenda(id):
    try:
        encomenda = session.query(Encomenda).filter(Encomenda.id == id).first()
        if not encomenda:
            return jsonify({"error": "Encomenda não encontrada!"}), 404

        session.delete(encomenda)
        session.commit()
        return jsonify({"message": "Encomenda deletada com sucesso!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


# Rotas CRUD para Ingredientes
@app.route("/cadastrar-ingrediente", methods=["POST"])
def cadastrar_ingrediente():
    try:
        dados = request.json
        nome_produto = dados.get("nome_produto")
        base = dados.get("base")
        recheio = dados.get("recheio")

        if not nome_produto:
            return jsonify({"error": "Nome do ingrediente é obrigatório!"}), 400

        novo_ingrediente = Ingrediente(
            nome_produto=nome_produto, base=base, recheio=recheio)
        session.add(novo_ingrediente)
        session.commit()
        return jsonify({"message": "Ingrediente cadastrado com sucesso!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/listar-ingredientes", methods=["GET"])
def listar_ingredientes():
    try:
        ingredientes = session.query(Ingrediente).all()
        resultado = [
            {
                "id": ingrediente.id,
                "nome_produto": ingrediente.nome_produto,
                "base": ingrediente.base,
                "recheio": ingrediente.recheio,
            }
            for ingrediente in ingredientes
        ]
        return jsonify(resultado), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/atualizar-ingrediente/<int:id>", methods=["PUT"])
def atualizar_ingrediente(id):
    try:
        dados = request.json
        ingrediente = session.query(Ingrediente).filter(
            Ingrediente.id == id).first()
        if not ingrediente:
            return jsonify({"error": "Ingrediente não encontrado!"}), 404

        ingrediente.nome_produto = dados.get(
            "nome_produto", ingrediente.nome_produto)
        ingrediente.base = dados.get("base", ingrediente.base)
        ingrediente.recheio = dados.get("recheio", ingrediente.recheio)
        session.commit()
        return jsonify({"message": "Ingrediente atualizado com sucesso!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/deletar-ingrediente/<int:id>", methods=["DELETE"])
def deletar_ingrediente(id):
    try:
        ingrediente = session.query(Ingrediente).filter(
            Ingrediente.id == id).first()
        if not ingrediente:
            return jsonify({"error": "Ingrediente não encontrado!"}), 404

        session.delete(ingrediente)
        session.commit()
        return jsonify({"message": "Ingrediente deletado com sucesso!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400


# Executar o servidor
if __name__ == "__main__":
    app.run(debug=True)
