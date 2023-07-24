import { useQuery } from "react-query";
import { ITeam } from "../helpers/Types";

export function useTeam(team: string) {
  return useQuery<ITeam>("team", async () => {
    const response = await fetch(`http://localhost:8080/team/${team}`);
    const data = await response.json();
    return data;
  });
}
