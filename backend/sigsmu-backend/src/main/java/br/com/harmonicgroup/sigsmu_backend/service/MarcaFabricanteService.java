package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.MarcaFabricante;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.MarcaFabricanteRepository;



@Service
public class MarcaFabricanteService {
    
    @Autowired
    MarcaFabricanteRepository marcaFabricanteRepository;

    public List<MarcaFabricante> listarMarcasFabricante() {
        return marcaFabricanteRepository.findAll();
    }

    public void cadastrarMarcaFabricante(MarcaFabricante meioPagamento) {
        marcaFabricanteRepository.save(meioPagamento);
    }

    // public void atualizarMarcaFabricante(UpdateDTO body, Integer id) {
    //     MarcaFabricante atual = marcaFabricanteRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Marca do fabricante não encontrada!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     marcaFabricanteRepository.save(atual);
    // }

    public void excluirMarcaFabricante(Integer id) {
        marcaFabricanteRepository.deleteById(id);
    }

}