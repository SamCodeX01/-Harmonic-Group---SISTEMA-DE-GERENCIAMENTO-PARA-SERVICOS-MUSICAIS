package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.harmonicgroup.sigsmu_backend.model.TipoServico;
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

}
