package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.AssGrupoDoServico;
import br.com.harmonicgroup.sigsmu_backend.repository.AssGrupoDoServicoRepository;

@Service
public class AssGrupoDoServicoService {
    
    @Autowired
    AssGrupoDoServicoRepository assGrupoDoServicoRepository;

    public List<AssGrupoDoServico> buscarGrupoDoServico() {
        return assGrupoDoServicoRepository.findAll();
    }

    public void adicionarAoGrupoDoServico(AssGrupoDoServico assGrupoDoServico) {
        assGrupoDoServicoRepository.save(assGrupoDoServico);
    }

}
