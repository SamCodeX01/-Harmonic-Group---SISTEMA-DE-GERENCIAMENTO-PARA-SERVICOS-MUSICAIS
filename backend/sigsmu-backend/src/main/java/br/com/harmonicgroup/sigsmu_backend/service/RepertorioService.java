package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.harmonicgroup.sigsmu_backend.model.Repertorio;
import br.com.harmonicgroup.sigsmu_backend.repository.RepertorioRepository;

@Service
public class RepertorioService {
    
    @Autowired
    RepertorioRepository repertorioRepository;

    public List<Repertorio> listarRepertorio() {
        return repertorioRepository.findAll();
    }

    public void cadastrarRepertorio(Repertorio repertorio) {
        repertorioRepository.save(repertorio);
    }

}
