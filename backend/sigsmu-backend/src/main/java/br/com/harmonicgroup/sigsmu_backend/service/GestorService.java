package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Gestor;
import br.com.harmonicgroup.sigsmu_backend.repository.GestorRepository;

@Service
public class GestorService {

    @Autowired
    GestorRepository gestorRepository;

    public List<Gestor> listarGestores() {
        return gestorRepository.findAll();
    }

    public Optional<Gestor> buuscarGestorPorCpf(String cpf) {
        return gestorRepository.findById(cpf);
    }

}
