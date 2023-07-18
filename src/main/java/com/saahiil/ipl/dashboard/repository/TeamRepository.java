package com.saahiil.ipl.dashboard.repository;

import com.saahiil.ipl.dashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);
}
