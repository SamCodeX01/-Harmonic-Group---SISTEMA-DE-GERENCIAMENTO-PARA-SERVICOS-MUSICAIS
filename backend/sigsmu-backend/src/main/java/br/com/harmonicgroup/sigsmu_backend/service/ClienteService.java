package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Cliente;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.ClienteRepository;



@Service
public class ClienteService {
    
    @Autowired
    ClienteRepository clienteRepository;

    public List<Cliente> listarClientes() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> buscarCliente(String cpf) {
        return clienteRepository.findById(cpf);
    }

    public void cadastrarCliente(Cliente cliente) {
        clienteRepository.save(cliente);
    }

    // public void atualizarCliente(UpdateDTO body, String cpf) {
    //     Cliente atual = clienteRepository.findById(cpf)
    //         .orElseThrow(() -> new RuntimeException("Cliente não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     clienteRepository.save(atual);
    // }

    public void excluirCliente(String cpf) {
        clienteRepository.deleteById(cpf);
    }

}