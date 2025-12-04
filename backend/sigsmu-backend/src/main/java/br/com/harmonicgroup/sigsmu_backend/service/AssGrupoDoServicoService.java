package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.AssGrupoDoServico;
import br.com.harmonicgroup.sigsmu_backend.model.Musico;
import br.com.harmonicgroup.sigsmu_backend.repository.AssGrupoDoServicoRepository;

@Service
public class AssGrupoDoServicoService {
    
    @Autowired
    AssGrupoDoServicoRepository assGrupoDoServicoRepository;

    public List<Musico> buscarGrupoDoServico(Integer id) {
        List<AssGrupoDoServico> assGrupoDoServico = assGrupoDoServicoRepository.findBySolicitacaoServicoId(id);

        // Transforma em uma lista de instrumentos de fato
        ArrayList<Musico> musicos = new ArrayList<>() {};
        for (AssGrupoDoServico registro : assGrupoDoServico) {
            musicos.add( registro.getMusico() );
        }

        return musicos;
    }

    public void adicionarAoGrupoDoServico(AssGrupoDoServico assGrupoDoServico) {
        assGrupoDoServicoRepository.save(assGrupoDoServico);
    }

}
