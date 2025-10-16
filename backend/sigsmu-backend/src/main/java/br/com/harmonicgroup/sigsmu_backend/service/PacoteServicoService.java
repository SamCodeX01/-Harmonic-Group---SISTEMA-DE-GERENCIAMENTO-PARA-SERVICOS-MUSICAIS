package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.harmonicgroup.sigsmu_backend.model.PacoteServico;
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

}
