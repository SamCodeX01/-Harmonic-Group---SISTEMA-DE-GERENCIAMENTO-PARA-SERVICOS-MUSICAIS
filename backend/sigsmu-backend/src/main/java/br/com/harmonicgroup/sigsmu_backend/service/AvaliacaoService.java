package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Avaliacao;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.AvaliacaoRepository;



@Service
public class AvaliacaoService {
    
    @Autowired
    AvaliacaoRepository avaliacaoRepository;

    public List<Avaliacao> listarAvaliacoes() {
        return avaliacaoRepository.findAll();
    }

    public void cadastrarAvaliacao(Avaliacao avaliacao) {
        avaliacaoRepository.save(avaliacao);
    }

    // public void atualizarAvaliacao(UpdateDTO body, Integer id) {
    //     Avaliacao atual = avaliacaoRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Avaliação não encontrada!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     avaliacaoRepository.save(atual);
    // }

    public void excluirAvaliacao(Integer id) {
        avaliacaoRepository.deleteById(id);
    }

}