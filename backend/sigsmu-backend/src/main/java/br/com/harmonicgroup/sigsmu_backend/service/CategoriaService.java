package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.harmonicgroup.sigsmu_backend.model.Categoria;
import br.com.harmonicgroup.sigsmu_backend.model.UpdateDTO;
import br.com.harmonicgroup.sigsmu_backend.repository.CategoriaRepository;



@Service
public class CategoriaService {
    
    @Autowired
    CategoriaRepository categoriaRepository;

    public List<Categoria> listarCategorias() {
        return categoriaRepository.findAll();
    }

    public void cadastrarCategoria(Categoria categoria) {
        categoriaRepository.save(categoria);
    }

    // public void atualizarCategoria(UpdateDTO body, Integer id) {
    //     Categoria atual = categoriaRepository.findById(id)
    //         .orElseThrow(() -> new RuntimeException("Categoria não encontrada!"));

    //     switch (body.getCampo()) {
    //         case "nome": atual.setNome( body.getNovoValor() );
    //             break;
    //     }
    //     categoriaRepository.save(atual);
    // }

    public void excluirCategoria(Integer id) {
        categoriaRepository.deleteById(id);
    }

}