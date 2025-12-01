package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.TipoServico;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.TipoServicoRepository;

@Service
public class TipoServicoService {
    
    @Autowired
    TipoServicoRepository servicoRepository;

    public List<TipoServico> listarTiposServico() {
        return servicoRepository.findAll();
    }

    public void cadastrarTipoServico(TipoServico servico) {
        servicoRepository.save(servico);
    }

    // public void atualizarTipoServico(UpdateDTO body, Integer id) {
    //     TipoServico atual = servicoRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Instrumento não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     servicoRepository.save(atual);
    // }

    public void excluirTipoServico(Integer id) {
        servicoRepository.deleteById(id);
    }

}