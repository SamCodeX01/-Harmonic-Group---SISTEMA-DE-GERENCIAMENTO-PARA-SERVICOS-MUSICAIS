package br.com.harmonicgroup.sigsmu_backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.harmonicgroup.sigsmu_backend.model.Instrumento;
import br.com.harmonicgroup.sigsmu_backend.repository.InstrumentoRepository;

@Service
public class InstrumentoService {
    
    @Autowired
    InstrumentoRepository instrumentoRepository;

    public List<Instrumento> listarInstrumentos() {
        return instrumentoRepository.findAll();
    }

    public void cadastrarInstrumento(Instrumento instrumento) {
        instrumentoRepository.save(instrumento);
    }

}
