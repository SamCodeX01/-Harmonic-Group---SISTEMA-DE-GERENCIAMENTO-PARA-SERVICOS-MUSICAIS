package br.com.harmonicgroup.sigsmu_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.harmonicgroup.sigsmu_backend.model.AssMusicasEscolhidas;

@Repository
public interface AssMusicasEscolhidasRepository extends JpaRepository<AssMusicasEscolhidas, Integer> {}
