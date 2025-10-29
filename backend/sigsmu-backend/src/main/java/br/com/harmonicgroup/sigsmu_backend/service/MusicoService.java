package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Musico;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.MusicoRepository;



@Service
public class MusicoService {
    
    @Autowired
    MusicoRepository musicoRepository;

    public List<Musico> listarMusicos() {
        return musicoRepository.findAll();
    }

    public void cadastrarMusico(Musico musico) {
        musicoRepository.save(musico);
    }

    // public void atualizarMusico(UpdateDTO body, String cpf) {
    //     Musico atual = musicoRepository.findById(cpf)
    //         .orElseThrow(() -> new RuntimeException("Músico não encontrado!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     musicoRepository.save(atual);
    // }

    public void excluirMusico(String cpf) {
        musicoRepository.deleteById(cpf);
    }

}