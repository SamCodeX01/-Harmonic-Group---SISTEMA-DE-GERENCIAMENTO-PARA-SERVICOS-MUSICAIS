package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.PacoteServico;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.PacoteServicoRepository;

@Service
public class PacoteServicoService {
    
    @Autowired
    PacoteServicoRepository pacoteServicoRepository;

    public List<PacoteServico> listarPacotesServico() {
        return pacoteServicoRepository.findAll();
    }

    public void cadastrarPacoteServico(PacoteServico pacoteServico) {
        pacoteServicoRepository.save(pacoteServico);
    }

    // public void atualizarPacoteServico(UpdateDTO body, Integer id) {
    //     PacoteServico atual = pacoteServicoRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Pacote de servico não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //         case "valor": atual.setValor( body.getNovoValor() );
    //             break;
    //         case "qtdMusicos": atual.setQtdMusicos( body.getNovoValor() );
    //             break;
    //         case "descricao": atual.setDescricao( body.getNovoValor() );
    //             break;
    //     }
    //     pacoteServicoRepository.save(atual);
    // }

    public void excluirPacoteServico(Integer id) {
        pacoteServicoRepository.deleteById(id);
    }

}