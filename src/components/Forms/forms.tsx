'use client'
import React, { useState } from 'react'

const Forms = () => {
  const [formData, setFormData] = useState({
    dataEmailRecebido: '',
    protocolo: '',
    statusImplantacao: '',
    migracaoOuVenda: '',
    codigoCliente: '',
    cnpj: '',
    razaoSocial: '',
    comercial: '',
    nomeResponsavel: '',
    telefone: '',
    clienteContatado: '',
    planilhasImportadas: '',
    cartoesLoteGerados: '',
    inclusao: '',
    reemissaoAlteracao: '',
    cancelamento: '',
    dataEntrega: '',
    dataFinalizacaoProcesso: '',
    prazoProcesso: '',
    dentroDoPrazo: '',
    implantado: '',
    observacao: '',
    motivoNaoMigracao: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Aqui você pode enviar os dados para o banco de dados MySQL
    console.log(formData)
    // Resetar o formulário após enviar os dados
    setFormData({
      dataEmailRecebido: '',
      protocolo: '',
      statusImplantacao: '',
      migracaoOuVenda: '',
      codigoCliente: '',
      cnpj: '',
      razaoSocial: '',
      comercial: '',
      nomeResponsavel: '',
      telefone: '',
      clienteContatado: '',
      planilhasImportadas: '',
      cartoesLoteGerados: '',
      inclusao: '',
      reemissaoAlteracao: '',
      cancelamento: '',
      dataEntrega: '',
      dataFinalizacaoProcesso: '',
      prazoProcesso: '',
      dentroDoPrazo: '',
      implantado: '',
      observacao: '',
      motivoNaoMigracao: ''
    })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 mb-10">
      <div className="mb-4">
        <input
          type="text"
          name="dataEmailRecebido"
          value={formData.dataEmailRecebido}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Data e-mail recebido"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="protocolo"
          value={formData.protocolo}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Protocolo"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="statusImplantacao"
          value={formData.statusImplantacao}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Status da implantação"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="migracaoOuVenda"
          value={formData.migracaoOuVenda}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Migração ou venda nova"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="codigoCliente"
          value={formData.codigoCliente}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Código cliente"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="cnpj"
          value={formData.cnpj}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="CNPJ"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="razaoSocial"
          value={formData.razaoSocial}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Razão social"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="comercial"
          value={formData.comercial}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Comercial"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="nomeResponsavel"
          value={formData.nomeResponsavel}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Nome responsável"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Telefone"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="clienteContatado"
          value={formData.clienteContatado}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Cliente contatado"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="planilhasImportadas"
          value={formData.planilhasImportadas}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Planilhas importadas"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="cartoesLoteGerados"
          value={formData.cartoesLoteGerados}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Cartões/lote gerados"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="inclusao"
          value={formData.inclusao}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Inclusão"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="reemissaoAlteracao"
          value={formData.reemissaoAlteracao}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Reemissão/alteração"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="cancelamento"
          value={formData.cancelamento}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Cancelamento"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="dataEntrega"
          value={formData.dataEntrega}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Data entrega"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="dataFinalizacaoProcesso"
          value={formData.dataFinalizacaoProcesso}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Data finalização processo"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="prazoProcesso"
          value={formData.prazoProcesso}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Prazo do processo"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="dentroDoPrazo"
          value={formData.dentroDoPrazo}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Dentro do prazo?"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="implantado"
          value={formData.implantado}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Implantado?"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="observacao"
          value={formData.observacao}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Observação"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          name="motivoNaoMigracao"
          value={formData.motivoNaoMigracao}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 w-full"
          placeholder="Motivo não migração"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Enviar
      </button>
    </form>
  )
}

export default Forms
