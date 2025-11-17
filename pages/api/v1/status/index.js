function status(request, response) {
  response.status(200).json({ chave: "confirmação" });
}

export default status;
